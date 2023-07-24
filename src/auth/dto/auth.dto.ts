import {IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthDto{
    @IsString()
    @IsNotEmpty({
        message:"Zorunlu  alan lütfen doldurunuz"
    })
    name:string

    @IsString()
    @IsNotEmpty({
        message:"Zorunlu  alan lütfen doldurunuz"
    })
    surname:string

    @IsString()
    @IsEmail()
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