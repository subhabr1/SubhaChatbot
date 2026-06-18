/**
 * Loads the about-me.md content
 * This file is imported at build time and bundled with the application
 */

// Import the markdown file as raw text
import aboutMeContent from '../data/about-me.md?raw';

/**
 * Gets the content from the about-me.md file
 * @returns The markdown content as a string
 */
export function getAboutMeContent(): string {
  return aboutMeContent;
}

/**
 * Checks if the about-me.md file has been customized
 * (i.e., not using placeholder text)
 * @returns boolean indicating if content has been customized
 */
export function isContentCustomized(): boolean {
  const content = aboutMeContent.toLowerCase();
  return !content.includes('<your name>') && 
         !content.includes('replace this content');
}

// Made with Bob
