import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from "typeorm"

//representa una entidad de history en la base de datos

@Entity({name:"history"})
export class Log extends BaseEntity { 
    @PrimaryGeneratedColumn()
    id_history: number
    
    @Column()
    id_book: number

    @Column()
    isbn: string

    @Column()
    title: string

    @Column()
    author: string

    @Column()
    year_of_publication: number

    @Column({nullable: true })
    summary: string
    @CreateDateColumn()
    lastModified: Date;
}