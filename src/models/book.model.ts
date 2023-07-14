import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm"

//representa una entidad de library en la base de datos.
@Entity({name:"library"})
export class Book extends BaseEntity { 
    
    @PrimaryGeneratedColumn()
    id_book: number

    @Column({ unique:true })
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