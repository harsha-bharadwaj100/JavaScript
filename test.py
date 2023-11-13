import threading
import math

def foo():
    i = 0
    for _ in range(100_000_000):
        math.isqrt(i)
    print("Foo")

def fun():
    i = 0
    for _ in range(100_000_000):
        math.isqrt(i)
    print("Fun")
    
t = threading.Thread(target=foo)
r = threading.Thread(target=fun)
t.start()
r.start()