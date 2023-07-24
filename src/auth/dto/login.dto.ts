import {IsNotEmpty, IsString } from "class-validator";

export class LoginDto{
    @IsString()
    @IsNotEmpty({
        message:"Zorunlu  alan lütfen doldurunuz"
    })
    email:string

    @IsString()
    @IsNotEmpty({
        message:"Şifreniz  6 - 25 karakter arasında olmalıdır. "
    })
    password: string
}