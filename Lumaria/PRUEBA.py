import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from matplotlib import rcParams

# Configuración
total_frames = 150
intervalo_ms = 100
fps_guardado = 12

# Estilo
plt.style.use('dark_background')
rcParams['font.family'] = 'sans-serif'
rcParams['font.size'] = 12
math_purple = '#9d50bb'
math_gold = '#ffd700'
math_light = '#f0e6ff'
math_dark = '#121212'
eje_color = '#ffffff'

# Figura
fig, ax = plt.subplots(figsize=(12, 7), facecolor=math_dark)
ax.set_facecolor(math_dark)

# Configuración de ejes
ax.axhline(0, color=eje_color, alpha=0.8, linewidth=2.5)  # Eje X más destacado
ax.axvline(0, color=eje_color, alpha=0.8, linewidth=2.5)  # Eje Y más destacado
ax.grid(color=math_light, alpha=0.1)
ax.set_xlim(-4, 4)
ax.set_ylim(-4, 4)
ax.set_title('TRANSFORMACIÓN VERTICAL: REFLEXIÓN + ESCALA (a < 0)', color=math_gold, pad=20, fontsize=15)
ax.set_xlabel('Eje X', color=eje_color, fontsize=14)
ax.set_ylabel('Eje Y', color=eje_color, fontsize=14)
ax.tick_params(axis='both', colors=eje_color, labelsize=12)

# Función base
def f(x):
    return np.sin(x) * np.exp(-x**2/10)

x = np.linspace(-4, 4, 500)
y = f(x)

# Elementos gráficos
original_line, = ax.plot(x, y, color=math_purple, linewidth=3.5, label='Original: f(x)')
transformada_line, = ax.plot([], [], color=math_gold, linewidth=3.5, linestyle='--', label='Transformada: a·f(x)')
punto_original = ax.scatter([], [], color=math_purple, s=100, zorder=5)
punto_transformado = ax.scatter([], [], color=math_gold, s=100, zorder=5)

# Textos explicativos
texto_ecuacion = ax.text(0.05, 0.94, '', transform=ax.transAxes, color=math_light, 
                         fontsize=13, bbox=dict(facecolor=math_dark, alpha=0.8))
texto_explicacion = ax.text(0.05, 0.84, '', transform=ax.transAxes, color=math_light, 
                           fontsize=12, bbox=dict(facecolor=math_dark, alpha=0.8))

# Leyenda
ax.legend(loc='upper right', facecolor=math_dark, edgecolor=math_light, fontsize=12)

# Variables para líneas guía
line_h = None
line_v = None

def update(frame):
    global line_h, line_v
    
    # Secuencia completa: a desde 1 → 0 → -1 → -2
    if frame < total_frames//3:
        # Fase 1: Compresión (1 → 0)
        progreso = frame / (total_frames//3)
        a = 1 - progreso  # 1 → 0
        texto_t = "Compresión vertical"
    elif frame < 2*total_frames//3:
        # Fase 2: Reflexión (0 → -1)
        progreso = (frame - total_frames//3) / (total_frames//3)
        a = -progreso  # 0 → -1
        texto_t = "Reflexión vertical"
    else:
        # Fase 3: Estiramiento invertido (-1 → -2)
        progreso = (frame - 2*total_frames//3) / (total_frames//3)
        a = -1 - progreso  # -1 → -2
        texto_t = "Estiramiento vertical + Reflexión"
    
    # Aplicar transformación
    y_trans = a * y
    transformada_line.set_data(x, y_trans)
    
    # Puntos de seguimiento
    x_punto = 1.5
    y_punto = f(x_punto)
    punto_original.set_offsets([[x_punto, y_punto]])
    punto_transformado.set_offsets([[x_punto, a * y_punto]])
    
    # Actualizar textos
    texto_ecuacion.set_text(f'Transformación: y = {a:.2f}·f(x)')
   
    # Líneas guía (siempre visibles)
    if line_h is not None:
        line_h.remove()
    if line_v is not None:
        line_v.remove()
        
    line_v = ax.axvline(x_punto, color=math_light, alpha=0.5, linestyle=':')
    line_h = ax.axhline(a * y_punto, color=math_gold, alpha=0.5, linestyle=':')
    
    
    return original_line, transformada_line, punto_original, punto_transformado, texto_ecuacion, texto_explicacion, line_v, line_h

ani = FuncAnimation(fig, update, frames=total_frames, interval=intervalo_ms, blit=False)

try:
    ani.save('reflexion_escala_vertical.gif', writer='pillow', fps=fps_guardado, dpi=120)
    print("Animación guardada como 'reflexion_escala_vertical.gif'")
except Exception as e:
    print(f"Error al guardar: {e}\nInstala pillow con: pip install pillow")

plt.tight_layout()
plt.show()