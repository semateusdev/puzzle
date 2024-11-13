import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-level-1',
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, CdkDrag],
  templateUrl: './level-1.component.html',
  styleUrl: './level-1.component.scss'
})
export class Level1Component {

  @ViewChild('boxImage') boxImage: ElementRef<HTMLDivElement>;

  public imageIndex = [ 5, 3, 7, 4, 2, 9, 8, 1, 6];

}
