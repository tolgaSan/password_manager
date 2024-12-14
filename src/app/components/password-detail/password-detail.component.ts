import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordService, PasswordItem } from '../../services/password.service';

@Component({
    selector: 'app-password-detail',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './password-detail.component.html'
})
export class PasswordDetailComponent implements OnInit {
    passwordItem?: PasswordItem;
    decryptedPassword?: string;

    constructor(
        private route: ActivatedRoute,
        private passwordService: PasswordService,
        private router: Router
    ) {}

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.passwordService.getById(id).subscribe(item => {
            this.passwordItem = item;
            this.decryptedPassword = this.passwordService.decryptPassword(item.encryptedPassword);
        });
    }

    edit() {
        if(this.passwordItem) {
            this.router.navigate(['/edit', this.passwordItem.id]);
        }
    }

    back(){
        this.router.navigate(['/list']);
    }

}