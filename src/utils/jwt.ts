import jwt, { JwtPayload} from "jsonwebtoken";

export const generateJWT = (paylood: JwtPayload) => {
    const token = jwt.sign(paylood, process.env.JWT_SECRET, {
        expiresIn: "180d" 
    }) 
    return token;
}