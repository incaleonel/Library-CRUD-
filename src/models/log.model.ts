import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from "typeorm"

@Entity({name:"history"})
export class Log extends BaseEntity { 
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    id_book: number
    
    @Column({ unique: true })
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