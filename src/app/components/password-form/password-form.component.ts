import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { PasswordService, PasswordItem } from '../../services/password.service';
import { CommonModule } from "@angular/common";

@Component({
    standalone: true,
    imports: [CommonModule,FormsModule],
    selector: "app-password-form",
    templateUrl: "./password-form.component.html",
})
export class PasswordFormComponent implements OnInit {
    isEditMode = false;
    passwordItem: PasswordItem = {
        category: "",
        app: "",
        userName: "",
        encryptedPassword: "",
    };
    decryptedPassword = "";

    constructor(
        private route: ActivatedRoute,
        private passwordService: PasswordService,
        private router: Router
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if(id) {
            this.isEditMode = true;
            const numericId = Number(id);
            this.passwordService.getById(numericId).subscribe(item => {
                this.passwordItem = item;
                this.decryptedPassword = this.passwordService.decryptPassword(item.encryptedPassword);
            });
        }
    }

    save() {
        this.passwordItem.encryptedPassword = this.passwordService.encryptPassword(this.decryptedPassword);

        if(this.isEditMode && this.passwordItem.id) {
            this.passwordService.update(this.passwordItem.id, this.passwordItem).subscribe(() => {
                this.router.navigate(['/list']);
            });
        } else {
            this.passwordService.create(this.passwordItem).subscribe(() => {
               this.router.navigate(['/list']); 
            });
        }
    }

    cancel(){
        this.router.navigate(['/list']);
    }

}