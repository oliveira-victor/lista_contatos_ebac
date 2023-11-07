class Contato {
    contactName: string
    email: string
    phone: number
    id: number

    constructor(contactName: string, email: string, phone: number, id: number) {
        this.contactName = contactName
        this.email = email
        this.phone = phone
        this.id = id
    }
}

export default Contato