import Image from '@tiptap/extension-image'
import { ReactNodeViewRenderer } from '@tiptap/react'
import { NotesImageView } from './NotesImageView'

/**
 * The stock Image node with a width, an alignment and a node view. Both
 * attributes are real attributes rather than component state, so they travel
 * with the document to the students and survive a save.
 */
export const NotesImage = Image.extend({
  draggable: true,

  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: null,
        parseHTML: el => {
          const raw = el.getAttribute('width')
          return raw ? parseInt(raw, 10) : null
        },
        renderHTML: attrs => (attrs.width ? { width: String(attrs.width) } : {}),
      },
      align: {
        default: 'center',
        parseHTML: el => el.getAttribute('data-align') || 'center',
        renderHTML: attrs => ({ 'data-align': attrs.align }),
      },
    }
  },

  addNodeView() { return ReactNodeViewRenderer(NotesImageView) },
})
