import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from matplotlib import rcParams, patches

# Configuración de velocidad
puntos_por_segundo = 1.5  # Velocidad lenta
duracion_curva = 3.0      # 3 segundos para dibujar la curva
fps = 30                  # Cuadros por segundo

# Cálculo de frames
frames_por_punto = int(fps / puntos_por_segundo)
total_puntos = 4
frames_totales = (total_puntos * frames_por_punto) + int(duracion_curva * fps)

# Estilo
plt.style.use('dark_background')
rcParams['font.family'] = 'sans-serif'
rcParams['font.size'] = 12
colors = {
    'fondo': '#121212', 'ejes': '#ffffff', 'grid': '#f0e6ff',
    'titulo': '#ffd700', 'punto': '#ffd700', 'curva': '#9d50bb', 
    'texto': '#f0e6ff', 'coordenada': '#ffd700'
}

# Figura
fig, ax = plt.subplots(figsize=(10, 6))
fig.patch.set_facecolor(colors['fondo'])
ax.set_facecolor(colors['fondo'])
ax.axhline(0, color=colors['ejes'], alpha=0.8, linewidth=2)
ax.axvline(0, color=colors['ejes'], alpha=0.8, linewidth=2)
ax.grid(color=colors['grid'], alpha=0.1)
ax.set_xlim(-0.5, 3.5)
ax.set_ylim(-0.5, 10)
ax.set_title('Construcción de la parábola y = x²', color=colors['titulo'], pad=20)

# Datos
puntos = np.array([[0, 0], [1, 1], [2, 4], [3, 9]])
scatters = []  # Almacena los puntos
textos_puntos = []  # Almacena los textos de coordenadas
curva_completa, = ax.plot([], [], color=colors['curva'], linewidth=3, alpha=0.8)

# Segmentos de parábola real
segmentos_curva = []
for i in range(len(puntos)-1):
    x_segment = np.linspace(puntos[i,0], puntos[i+1,0], 30)
    y_segment = x_segment**2
    segmentos_curva.append((x_segment, y_segment))

def init():
    curva_completa.set_data([], [])
    return [curva_completa]

def update(frame):
    # Puntos visibles
    puntos_mostrados = min(frame // frames_por_punto + 1, len(puntos))
    frame_en_punto = frame % frames_por_punto
    
    # Efecto de aparición para el punto actual
    if puntos_mostrados <= len(puntos):
        progreso_punto = min(frame_en_punto / (frames_por_punto*0.7), 1)
        tamaño = 20 + 80 * progreso_punto
        alpha_texto = min(1, progreso_punto * 1.5)
    
    # Agregar nuevos puntos sin borrar los anteriores
    while len(scatters) < puntos_mostrados:
        i = len(scatters)
        
        # Dibujar punto
        sc = ax.scatter(puntos[i, 0], puntos[i, 1], 
                       color=colors['punto'], s=tamaño, zorder=5)
        scatters.append(sc)
        
        # Agregar texto de coordenada
        txt = ax.text(puntos[i, 0]+0.15, puntos[i, 1]+0.15, 
                     f'({puntos[i,0]}, {puntos[i,1]})',
                     color=colors['coordenada'], fontsize=10, alpha=alpha_texto)
        textos_puntos.append(txt)
    
    # Dibujar segmentos de parábola
    if puntos_mostrados > 1:
        segmentos_a_dibujar = min(puntos_mostrados-1, len(segmentos_curva))
        x_curva = []
        y_curva = []
        
        for i in range(segmentos_a_dibujar):
            progreso_segmento = min((frame - (i+1)*frames_por_punto) / (frames_por_punto*1.5), 1)
            fin_idx = int(len(segmentos_curva[i][0]) * progreso_segmento)
            
            x_curva.extend(segmentos_curva[i][0][:fin_idx])
            y_curva.extend(segmentos_curva[i][1][:fin_idx])
        
        curva_completa.set_data(x_curva, y_curva)
    
    return [curva_completa] + scatters + textos_puntos

# Crear animación
ani = FuncAnimation(fig, update, frames=frames_totales, init_func=init,
                    interval=1000/fps, blit=False)

try:
    print("Guardando animación...")
    ani.save('parabola_coordenadas.gif', 
             writer='pillow', 
             fps=fps,
             dpi=100,
             progress_callback=lambda i, n: print(f'Progreso: {100*i/n:.1f}%') if i % 20 == 0 else None)
    print("\n¡Animación guardada como 'parabola_coordenadas.gif'!")
except Exception as e:
    print(f"\nError al guardar: {e}")
    print("Instala pillow con: pip install pillow")

plt.tight_layout()
plt.show()