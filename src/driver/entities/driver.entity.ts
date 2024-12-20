import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name : 'drivers'})
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type : 'text',  nullable : false})
  nom_complet: string;
  @Column({ type : 'text',  nullable : true})
  gmail: string;
  @Column({ type : 'text',  nullable : true})
  password: string;
  @Column({ type : 'text',  nullable : true})
  Adresse: string;
  @Column({ type : 'text',  nullable : true})
  telephone: string;

  Chauffeur(nc: string, g: string, p: string, adr: string, tele: string): void {
    this.nom_complet = nc;
    this.gmail = g;
    this.password = p;
    this.Adresse = adr;
    this.telephone = tele;
  }

  public show(): void {
    console.log(this.nom_complet, this.Adresse);
  }
}
