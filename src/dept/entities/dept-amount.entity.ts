import { AbstractEntity } from 'src/common/entities';
import { Column, Entity, ManyToOne } from 'typeorm';
import { DeptItemEntity } from '.';

@Entity({ name: 'dept-amounts' })
export class DeptAmountEntity extends AbstractEntity {
  @Column()
  public amount: number;

  @ManyToOne(() => DeptItemEntity, (deptItem) => deptItem.amounts)
  public item: DeptItemEntity;
}
