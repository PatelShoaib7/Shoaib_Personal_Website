import { CONTACT_CLOSING_CONSTANTS, PROFILE_CONSTANTS } from '../constants';
import { IContactClosingCopy } from '../interfaces';
import { buildGmailComposeLink } from '../utils';

class ContactService {
  public getClosingCopy(): IContactClosingCopy {
    return CONTACT_CLOSING_CONSTANTS;
  }

  public getGmailComposeHref(): string {
    return buildGmailComposeLink(
      PROFILE_CONSTANTS.email,
      CONTACT_CLOSING_CONSTANTS.defaultMailSubject
    );
  }

  public async copyEmailToClipboard(): Promise<boolean> {
    const email = PROFILE_CONSTANTS.email;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
        return true;
      }

      const textArea = document.createElement('textarea');
      textArea.value = email;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const copied = document.execCommand('copy');
      document.body.removeChild(textArea);
      return copied;
    } catch {
      return false;
    }
  }
}

export const contactService = new ContactService();
