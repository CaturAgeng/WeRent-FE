export default function handler(req : any, res : any) {
    req.method.toLowerCase() === "post" ? res.status(200).json({ access_token: "token"}) : res.status(400).json({ access_token: "token" })
}