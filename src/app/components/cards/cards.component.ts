import { ICards } from './../../modules/cards';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  cards: ICards[] = [
    {
      id: '01',
      title: 'Reviving Retro PCs',
      url: '../../../assets/images/image-retro-pcs.jpg',
      desc: 'What happens when old PCs are given modern upgrades?',
    },
    {
      id: '02',
      title: 'Top 10 Laptops of 2022',
      url: '../../../assets/images/image-top-laptops.jpg',
      desc: 'Our best picks for various needs and budgets.',
    },
    {
      id: '03',
      title: 'The Growth of Gaming',
      url: '../../../assets/images/image-gaming-growth.jpg',
      desc: 'How the pandemic has sparked fresh opportunities.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
