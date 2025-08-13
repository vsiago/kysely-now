import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <main className="flex-1 container max-w-7xl mx-auto flex items-center justify-center px-4">
                <Card className="w-full max-w-sm">
                    <CardHeader className='text-center'>
                        <CardTitle className='text-xl'>Logo</CardTitle>
                        <CardDescription>
                            Cadastre sua conta
                        </CardDescription>
       
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                    <Label htmlFor="email">Nome</Label>
                                    <Input
                                        id="nome"
                                        type="nome"
                                        placeholder="Digite seu nome"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">E-mail</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Digite seu e-mail"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                <Label htmlFor="password">Senha</Label>
                                    <Input 
                                    id="password" 
                                    type="password" 
                                    placeholder='Digite sua senha'
                                    required />
                                </div>
                                <div className="grid gap-2">
                                    <Input 
                                    id="password" 
                                    type="password" 
                                    placeholder='Repita sua senha'
                                    required />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Button type="submit" className="w-full">
                            Cadastrar
                        </Button>
                        <Button variant="outline" className="w-full">
                            Cadastrar e logar com Google
                        </Button>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}