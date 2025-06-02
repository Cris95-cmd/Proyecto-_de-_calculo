# grafica_inyectiva_animada.py
import matplotlib.pyplot as plt
import numpy as np
from matplotlib.animation import FuncAnimation

def generar_grafica_inyectiva():
    # Configuración del estilo (mismos colores)
    plt.style.use('dark_background')
    colors = {
        'purple': '#9d50bb',
        'gold': '#ffd700',
        'light': '#f0e6ff',
        'dark': '#121212',
        'cyan': '#00ffff',
        'axis': '#ffffff'
    }

    # Crear figura (8x6 pulgadas como la anterior)
    fig, ax = plt.subplots(figsize=(8, 6), facecolor=colors['dark'])
    fig.suptitle('Función Inyectiva: f(x) = x', color=colors['gold'], fontsize=14)

    # Configuración del gráfico (mismos límites para comparación)
    ax.set_xlabel('x', color=colors['light'], fontsize=12)
    ax.set_ylabel('f(x)', color=colors['light'], fontsize=12)
    ax.grid(color=colors['light'], alpha=0.1)
    ax.set_facecolor(colors['dark'])
    ax.set_xlim(-3.5, 3.5)
    ax.set_ylim(-3.5, 3.5)  # Ajustado para función lineal

    # Ejes x e y (mismo estilo)
    ax.axhline(0, color=colors['axis'], linewidth=1.5, alpha=0.7)
    ax.axvline(0, color=colors['axis'], linewidth=1.5, alpha=0.7)
    
    # Función lineal
    x = np.linspace(-3, 3, 100)
    y = x
    line, = ax.plot(x, y, color=colors['gold'], linewidth=2.5, zorder=1, label='f(x) = x')
    
    # Puntos animados
    point = ax.scatter([], [], color=colors['purple'], s=120, zorder=5)
    vertical_line = ax.axvline(0, color=colors['light'], linestyle='--', alpha=0)
    text = ax.text(0.02, 0.92, '', transform=ax.transAxes, color=colors['light'], fontsize=12,
                  bbox=dict(facecolor=colors['dark'], alpha=0.8, edgecolor=colors['light']))

    # Valores para animación
    values = [-3, -2, -1, 0, 1, 2, 3]
    pause_frames = 15

    def update(frame):
        x_val = values[min(frame // pause_frames, len(values)-1)]
        y_val = x_val
        
        point.set_offsets([[x_val, y_val]])
        vertical_line.set_xdata([x_val, x_val])
        vertical_line.set_alpha(0.7)
        
        text.set_text(f'Punto único:\nf({x_val:.1f}) = {y_val:.1f}')
        
        return point, vertical_line, text

    # Animación
    anim = FuncAnimation(fig, update, frames=len(values)*pause_frames, interval=200, blit=False)

    # Guardar imagen estática (mismo tamaño que la animación)
    plt.savefig('funcion_inyectiva.png', dpi=120, facecolor=colors['dark'], bbox_inches='tight')
    print("¡Gráfica estática guardada como 'funcion_inyectiva.png'!")
    
    # Guardar animación
    anim.save('funcion_inyectiva_animada.gif', writer='pillow', dpi=120)
    print("¡Gráfica animada guardada como 'funcion_inyectiva_animada.gif'!")
    
    plt.tight_layout()
    plt.show()

if __name__ == "__main__":
    generar_grafica_inyectiva()