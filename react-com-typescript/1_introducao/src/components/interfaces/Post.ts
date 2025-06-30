export interface ContentItem {
    type: 'link' | 'paragraph';  // tipos de conteúdo
    content: string;  // Isso pode variar, dependendo do tipo de conteúdo
  }
  
export interface Author {
    avatarUrl: string;
    name: string;
    role: string;
  }
  
export interface PostProps {
    author: Author;
    publishedAt: Date; // Pode ser Date, dependendo do formato
    content: ContentItem[]; // Um array de objetos do tipo ContentItem
}

