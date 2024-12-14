import { Component, OnInit } from '@angular/core';
import { PasswordService, PasswordItem } from '../../services/password.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'app-password-list',
    templateUrl: './password-list.component.html',
})
export class PasswordListComponent implements OnInit {
    passwords: PasswordItem[] = [];

    constructor(private passwordService: PasswordService, private router: Router) {}

    ngOnInit() {
        this.loadPasswords();
    }

    loadPasswords(){
        this.passwordService.getAll().subscribe(data => {
            this.passwords = data
        });
    }

    goToCreate() {
        this.router.navigate(['/create']);
    }

    goToDetail(id: number){
        if (id !== undefined) {
            this.router.navigate(['/detail', id]);
        } else {
            console.error('Id is undefined');
        }
    }

    deleteItem(id: number) {
        if(confirm("Are you sure you want to delete this password?")) {
            this.passwordService.delete(id).subscribe(() => {
               this.loadPasswords(); 
            });
        }
    }
}
