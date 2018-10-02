import { Injectable } from '@angular/core';

import { TagsService, TagsQuery, TagsState } from 'src/app/store/tags/state';

@Injectable({
  providedIn: 'root'
})
export class TagsUtliService {

  constructor(
    private tagsService: TagsService,
    private tagsQuery: TagsQuery
  ) { }

  addSelectedTag(tag: string): void {
    let selectedTags: string[] = this.tagsQuery.getSnapshot().selectedTags;
    selectedTags = [ ...selectedTags, tag ];
    selectedTags = selectedTags.filter((selectedTag, i, self) => self.indexOf(selectedTag) === i);
    this.tagsService.setSelectedTags(selectedTags);
  }

  removeSelectedTag(tag: string): void {
    const selectedTags = this.tagsQuery.getSnapshot().selectedTags.filter(selectedTag => selectedTag !== tag);
    this.tagsService.setSelectedTags(selectedTags);
  }
}
