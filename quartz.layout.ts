import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
		title: "Explorer", // 사이드바 제목
		folderClickBehavior: "collapse", // 👈 이 줄을 추가하세요!
		useSavedState: true, // 사용자가 접고 펼친 상태를 기억
		filterFn: (node) => {
			// 1. 폴더 이름(name) 또는 표시 이름(displayName) 체크
			const folderName = node.name?.toLowerCase() || "";
			const displayTitle = node.displayName?.toLowerCase() || "";
			
			// 2. 파일 슬러그(slug) 체크 (파일인 경우에만 존재)
			const slug = node.file?.slug?.toLowerCase() || "";

			// 제외하고 싶은 키워드들 (소문자로 작성)
			const excludeKeywords = ["note", "extra", "template"];

			// 조건: 폴더 이름이나 슬러그에 해당 키워드가 포함되어 있으면 제외(false)
			if (
			  excludeKeywords.includes(folderName) || 
			  excludeKeywords.includes(displayTitle) ||
			  excludeKeywords.some(keyword => slug.startsWith(keyword))
			) {
			  return false;
			}

			return true;
		  },
	}),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
		title: "Explorer", // 사이드바 제목
		folderClickBehavior: "collapse", // 👈 이 줄을 추가하세요!
		useSavedState: true, // 사용자가 접고 펼친 상태를 기억
		filterFn: (node) => {
			// 1. 폴더 이름(name) 또는 표시 이름(displayName) 체크
			const folderName = node.name?.toLowerCase() || "";
			const displayTitle = node.displayName?.toLowerCase() || "";
			
			// 2. 파일 슬러그(slug) 체크 (파일인 경우에만 존재)
			const slug = node.file?.slug?.toLowerCase() || "";

			// 제외하고 싶은 키워드들 (소문자로 작성)
			const excludeKeywords = ["note", "extra", "template"];

			// 조건: 폴더 이름이나 슬러그에 해당 키워드가 포함되어 있으면 제외(false)
			if (
			  excludeKeywords.includes(folderName) || 
			  excludeKeywords.includes(displayTitle) ||
			  excludeKeywords.some(keyword => slug.startsWith(keyword))
			) {
			  return false;
			}

			return true;
		  },
	}),
  ],
  right: [],
}