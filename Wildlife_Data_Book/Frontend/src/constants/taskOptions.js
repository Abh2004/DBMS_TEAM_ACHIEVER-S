import Photo from "@mui/icons-material/Photo"
import Theaters from "@mui/icons-material/Theaters"

import { MediaForm, ArticleForm } from "../components/Form"
import { InfoPanel, ImageGallery, VideoGallery, ArticlesPage } from "../components/Content"
import { handleUploadImage, handleUploadVideo } from "../actions/posts"

export const contributeOptions = {
  mediaTypeQuery: "upload",
  mediaTypes: [
    {
      label: "Upload image",
      to: "image",
      component: {
        Component: MediaForm,
        props: {
          FileIcon: Photo,
          acceptType: "image/*",
          fileKey: "img",
          action: handleUploadImage,
        },
      }
    },
    {
      label: "Upload video",
      to: "video",
      component: {
        Component: MediaForm,
        props: {
          FileIcon: Theaters,
          acceptType: "video/*",
          fileKey: "video",
          action: handleUploadVideo,
        }
      }
    },
    {
      label: "Write article",
      to: "article",
      component: {
        Component: ArticleForm,
        props: {}
      }
    },
  ]
}

export const exploreOptions = {
  mediaTypeQuery: "mediatype",
  mediaTypes: {
    articles: {
      label: "Articles",
      type: 4,
      Component: ArticlesPage,
    },
    images: {
      label: "Images",
      type: 2,
      Component: ImageGallery,
    },
    videos: {
      label: "Videos",
      type: 3,
      Component: VideoGallery,
    },

  }
}