import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'raktbeej';
  // Message for contact form
  message = '';

  // Handle form submission
  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.message.trim()) {
      alert('Message sent successfully!');
      this.message = ''; // Clear the textarea
    } else {
      alert('Please enter a message before sending.');
    }
  }
  projects = [
    {
      title: 'Network Security Scanner',
      description: 'A tool to scan and analyze network vulnerabilities.',
      link: 'https://github.com/username/network-scanner'
    },
    {
      title: 'Password Cracker',
      description: 'A brute-force password cracker for ethical hacking.',
      link: 'https://github.com/username/password-cracker'
    },
    {
      title: 'Web App Pentesting Tool',
      description: 'Automated web application penetration testing framework.',
      link: 'https://github.com/username/web-pentest-tool'
    }
  ];

  // Details about becoming a cybersecurity expert
  expertDetails =
    'Learn and practice ethical hacking, network security, cryptography, and exploit development to master cybersecurity.';
}
