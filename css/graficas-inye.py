# graficas_funciones.py
import matplotlib.pyplot as plt
import numpy as np

def generar_graficas():
    # Configuración del estilo
    plt.style.use('dark_background')
    colors = {
        'purple': '#9d50bb',
        'gold': '#ffd700',
        'light': '#f0e6ff',
        'dark': '#121212'
    }

    # Crear figura
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5), facecolor=colors['dark'])
    fig.suptitle('Comparación de Funciones', color=colors['gold'], fontsize=14)

    # --- Gráfico 1: Función NO inyectiva (cuadrática) ---
    x = np.linspace(-3, 3, 100)
    y = x**2
    ax1.plot(x, y, color=colors['purple'], linewidth=2.5, label='f(x) = x²')
    ax1.scatter([-2, 2], [4, 4], color=colors['gold'], s=80, zorder=5)

    for y_val in [1, 2, 4,]:
      ax1.axhline(y=y_val, color=colors['light'], linestyle='--', alpha=0.3)

    # Añadir anotaciones
    ax1.annotate('f(-2) = f(2) = 4', xy=(2, 4), xytext=(2.5, 5),
                color=colors['light'], arrowprops=dict(arrowstyle='->', color=colors['gold']))
    

    # Configuración del gráfico
    ax1.set_title('Función NO Inyectiva', color=colors['gold'])
    ax1.set_xlabel('x', color=colors['light'])
    ax1.set_ylabel('f(x)', color=colors['light'])
    ax1.grid(color=colors['light'], alpha=0.1)
    ax1.legend()

    # --- Gráfico 2: Función inyectiva (lineal) ---
    x = np.linspace(-1, 3, 100)
    y = 2*x
    ax2.plot(x, y, color=colors['gold'], linewidth=2.5, label='f(x) = 2x')

    # Añadir múltiples líneas horizontales
    for y_val in [2,4]:
        ax2.axhline(y=y_val, color=colors['light'], linestyle='--', alpha=0.3)
        ax2.scatter(y_val/2, y_val, color=colors['purple'], s=80, zorder=5)

    # Configuración del gráfico
    ax2.set_title('Función Inyectiva', color=colors['gold'])
    ax2.set_xlabel('x', color=colors['light'])
    ax2.set_ylabel('f(x)', color=colors['light'])
    ax2.grid(color=colors['light'], alpha=0.1)
    ax2.legend()

    # Ajustar diseño y guardar
    plt.tight_layout()
    plt.savefig('comparacion_funciones.png', dpi=300, bbox_inches='tight', transparent=True)
    print("¡Gráficas generadas correctamente como 'comparacion_funciones.png'!")
    plt.show()

if __name__ == "__main__":
    generar_graficas()