import { LightningElement, api } from 'lwc';

import ViewCurrentPermissions from '@salesforce/label/c.ViewCurrentPermissions';
import AddNewPermission from '@salesforce/label/c.AddNewPermission';

export default class LightningSharingWrapper extends LightningElement {
    @api recordId;

    label = {
        ViewCurrentPermissions,
        AddNewPermission
    };

    @api refresh() {
        const existing = this.template.querySelector('c-existing-shares');
        if (existing) {
            existing.refresh();
        }
    }
}
