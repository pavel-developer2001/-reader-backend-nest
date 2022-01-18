import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImagesChapterEntity } from './entities/images-chapter.entity';

@Injectable()
export class ImagesChapterService {
  constructor(
    @InjectRepository(ImagesChapterEntity)
    private repository: Repository<ImagesChapterEntity>,
  ) {}
  async create(
    imageChapter: string,
    chapterId: number,
    mangaId: number,
    userId: number,
  ) {
    return this.repository.create({
      imageChapter,
      user: { id: userId },
      manga: { id: mangaId },
      chapter: { id: chapterId },
    });
  }

  getImages(id: string) {
    return this.repository.find({ where: { chapter: id } });
  }

  findAll() {
    return `This action returns all imagesChapter`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imagesChapter`;
  }

  update(id: number) {
    return `This action updates a #${id} imagesChapter`;
  }

  remove(id: number) {
    return `This action removes a #${id} imagesChapter`;
  }
}
