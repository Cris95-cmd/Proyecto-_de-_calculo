# grafica_no_inyectiva_animada.py
import matplotlib.pyplot as plt
import numpy as np
from matplotlib.animation import FuncAnimation

def generar_grafica_animada():
    # Configuración del estilo
    plt.style.use('dark_background')
    colors = {
        'purple': '#9d50bb',
        'gold': '#ffd700',
        'light': '#f0e6ff',
        'dark': '#121212',
        'cyan': '#00ffff',
        'axis': '#ffffff'  # Color más brillante para los ejes
    }

    # Crear figura (mismo tamaño 8x6 pulgadas)
    fig, ax = plt.subplots(figsize=(8, 6), facecolor=colors['dark'])
    fig.suptitle('Función NO Inyectiva: f(x) = x²', color=colors['gold'], fontsize=14)

    # Configuración del gráfico (mismos límites)
    ax.set_xlabel('x', color=colors['light'], fontsize=12)
    ax.set_ylabel('f(x)', color=colors['light'], fontsize=12)
    ax.grid(color=colors['light'], alpha=0.1)
    ax.set_facecolor(colors['dark'])
    ax.set_xlim(-3.5, 3.5)  # Ajustado para mejor visualización de la parábola
    ax.set_ylim(-0.5, 10)   # Mantiene espacio superior para la animación

    # Remarcar ejes x e y (mismo estilo)
    ax.axhline(0, color=colors['axis'], linewidth=1.5, alpha=0.7)  # Eje x
    ax.axvline(0, color=colors['axis'], linewidth=1.5, alpha=0.7)  # Eje y
    
    # Etiquetas de ejes (misma posición)
    ax.text(3.6, -0.3, '+x', color=colors['axis'], fontsize=10, ha='center')
    ax.text(-3.6, -0.3, '-x', color=colors['axis'], fontsize=10, ha='center')
    ax.text(0.2, 9.5, '+f(x)', color=colors['axis'], fontsize=10)
    ax.text(0.2, -0.3, '0', color=colors['axis'], fontsize=10)

    # Función cuadrática
    x = np.linspace(-3, 3, 100)
    y = x**2
    line, = ax.plot(x, y, color=colors['purple'], linewidth=2.5, zorder=1)
    
    # Elementos animados (optimizados)
    point_positive = ax.scatter([], [], color=colors['gold'], s=120, zorder=5, label='x positivo')
    point_negative = ax.scatter([], [], color=colors['cyan'], s=120, zorder=5, label='x negativo')
    horizontal_line = ax.axhline(y=0, color=colors['light'], linestyle='--', alpha=0)
    text = ax.text(0.02, 0.92, '', transform=ax.transAxes, color=colors['light'], fontsize=12,
                  bbox=dict(facecolor=colors['dark'], alpha=0.8, edgecolor=colors['light']))

    # Valores a mostrar (x, -x) - mismos pares
    values = [(3, -3), (2.5, -2.5), (2, -2), (1.5, -1.5), (1, -1), (0, 0)]
    pause_frames = 20  # Misma pausa

    # Función de animación (misma lógica)
    def update(frame):
        pair_index = min(frame // pause_frames, len(values)-1)
        x_pos, x_neg = values[pair_index]
        y_val = x_pos**2
        
        # Actualizar elementos
        point_positive.set_offsets([[x_pos, y_val]])
        point_negative.set_offsets([[x_neg, y_val]])
        horizontal_line.set_ydata([y_val, y_val])
        horizontal_line.set_alpha(0.7 if y_val > 0 else 0)
        
        # Texto adaptativo
        text.set_text(f'Origen:\nf(0) = 0' if x_pos == 0 else 
                    f'Puntos equivalentes:\nf({x_pos:.1f}) = f({x_neg:.1f}) = {y_val:.1f}')
        
        # Resaltado de ejes en origen
        ax.axhline(0, color=colors['gold'] if x_pos == 0 else colors['axis'], 
                  linewidth=2 if x_pos == 0 else 1.5, alpha=0.5 if x_pos == 0 else 0.7)
        ax.axvline(0, color=colors['gold'] if x_pos == 0 else colors['axis'], 
                  linewidth=2 if x_pos == 0 else 1.5, alpha=0.5 if x_pos == 0 else 0.7)
        
        return point_positive, point_negative, horizontal_line, text

    # Animación con misma configuración
    anim = FuncAnimation(fig, update, frames=len(values)*pause_frames, interval=200, blit=False)

    # Leyenda en misma posición
    ax.legend(loc='upper right', fontsize=10)

    # Guardar con misma calidad
    plt.tight_layout()
    anim.save('funcion_no_inyectiva_animada.gif', writer='pillow', dpi=120)
    print("¡Gráfica animada generada como 'funcion_no_inyectiva_animada.gif'!")
    plt.show()

if __name__ == "__main__":
    generar_grafica_animada()