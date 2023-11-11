class Contato {
    contactName: string
    email: string
    phone: string
    id: number

    constructor(contactName: string, email: string, phone: string, id: number) {
        this.contactName = contactName
        this.email = email
        this.phone = phone
        this.id = id
    }
}

export default Contato