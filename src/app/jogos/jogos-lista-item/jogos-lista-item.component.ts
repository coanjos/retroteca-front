import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';
import { jogo } from '../interfaces/jogo';
import { JogosService } from '../services/jogos.service';
@Component({
  selector: 'app-jogos-lista-item',
  templateUrl: './jogos-lista-item.component.html',
  styleUrls: ['./jogos-lista-item.component.css'],
})
export class JogosListaItemComponent implements OnInit {
  @Input() jogo!: jogo;
  @Output() apagarEvent = new EventEmitter<string>();
  @Input() isLogado!: boolean;

  imageToShow: any = null;

  constructor(private jogoService: JogosService) {}

  ngOnInit(): void {
    this.jogoService.getCapa(this.jogo.capa).subscribe(
      (image) => this.createImage(image),
      (err) => this.handleImageRetrievalError(err)
    );
  }

  private handleImageRetrievalError(err: Error) {
    console.error(err);
  }

  private createImage(image: Blob) {
    if (image && image.size > 0) {
      let reader = new FileReader();

      reader.addEventListener(
        'load',
        () => {
          this.imageToShow = reader.result;
        },
        false
      );

      reader.readAsDataURL(image);
    }
  }

  apagar(id: string) {
    this.apagarEvent.emit(id);
  }
}
