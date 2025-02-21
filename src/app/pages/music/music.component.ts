import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MusicService } from '../../services/music.service';
  
@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
})

export class MusicComponent {
  tracks: any[] = [];
  artist = ''; 

  constructor(private musicService: MusicService) {}

  searchMusic(): void {
    this.musicService.searchTracks(this.artist).subscribe((response) => {
      this.tracks = response.data;
    });
  }

  formatDuration(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  }
}