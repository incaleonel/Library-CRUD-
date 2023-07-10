import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name:"library"})
export class Book { 
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true, nullable: false })
    isbn: string

    @Column({nullable: false })
    title: string

    @Column({nullable: false })
    author: string

    @Column({nullable: false })
    year_of_publication: number

    @Column()
    summary: string
}