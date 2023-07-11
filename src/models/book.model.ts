import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity({name:"library"})
export class Book extends BaseEntity { 
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true})
    isbn: string

    @Column()
    title: string

    @Column()
    author: string

    @Column()
    year_of_publication: number

    @Column({nullable: true})
    summary: string
}