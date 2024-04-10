import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
 function Login() {
  return (
    <div className="lg:grid lg:grid-cols-2 w-full lg:min-h-[600px] xl:min-h-[800px] max-h-screen">
      <div className="flex justify-center items-center py-12">
        <div className="gap-6 grid mx-auto w-[350px]">
          <div className="gap-2 grid text-center">
            <h1 className="font-bold text-3xl">Epsaind Ai</h1>
            <p className="text-balance text-white">Regístrate o Inicia sesión con</p>
          </div>
          <div className="gap-4 grid">
            <div className="gap-2 grid">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required className="bg-neutral-950" />
            </div>
            <div className="gap-2 grid">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="inline-block ml-auto text-sm underline">
                  ¿Olvidó su contraseña?
                </Link>
              </div>
              <Input id="password" type="password" required className="bg-neutral-950" />
            </div>
            <Button type="submit" className="w-full">
              Iniciar sesión
            </Button>
            <Button variant="outline" className="bg-neutral-950 hover:bg-neutral-900 w-full">
              Iniciar sesión con Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            ¿Necesita una cuenta?{" "}
            <Link href="#" className="underline">
              Regístrate
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:block hidden bg-muted max-h-screen">
        <Image
          src="/header.webp"
          alt="Image"
          width="1920"
          height="1080"
          className="brightness-[1.2] w-full h-full object-cover"
        />
      </div>
    </div>
  );
}


export default Login;