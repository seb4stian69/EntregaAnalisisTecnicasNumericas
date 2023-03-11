import math
import matplotlib.pyplot as plt

def muller_method(f, x0, x1, x2, r, eps= 0.01, max_iter=50):

    results = []
    for i in range(max_iter):
        h0 = x1 - x0
        h1 = x2 - x1
        d0 = (f(x1) - f(x0)) / h0
        d1 = (f(x2) - f(x1)) / h1
        a = (d1 - d0) / (h1 + h0)
        b = a * h1 + d1
        c = f(x2)
        rdisc = math.sqrt(b**2-(4*a*c))
        prueba_Logica1 = abs(b+rdisc)>abs(b-rdisc)
        if prueba_Logica1:
            x3 = x2+((-2*c)/(b+rdisc))
        else:
            x3 = x2+((-2*c)/(b-rdisc))
        
        ea = abs((x3 - x2) / x3) * 100
        results.append([i, x0, x1, x2, x3, ea])
        if ea < eps:
            break
        x0 = x1
        x1 = x2
        x2 = x3
    return x3, results

# Ejemplo de uso:
def f(x):
    return x**3 - 13*x - 12

x0 = 4.5
x1 = 5.5
x2 = 5.0
r = 4.0

approx_r, results = muller_method(f, x0, x1, x2, r)

print(f"La raíz aproximada es {approx_r:.8f}")

# mostrar la tabla de resultados
print("Tabla de resultados:")
print(f"{'Iteración':<10}{'x0':<10}{'x1':<10}{'x2':<10}{'x3':<10}{'Ea(%)':<10}")
for row in results:
    print(f"{row[0]:<10}{row[1]:<10.8f}{row[2]:<10.8f}{row[3]:<10.8f}{row[4]:<10.8f}{row[5]:<10.8f}")
