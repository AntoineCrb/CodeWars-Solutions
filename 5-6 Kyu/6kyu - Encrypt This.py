def encrypt_this(text, st = ""):
    for a in text.split(" "): st +=  "" if a == "" else " "+str(ord(a[0]))+(a[1:] if len(a) < 3 else a[-1]+a[2:-1]+a[1])
    return st[1:]