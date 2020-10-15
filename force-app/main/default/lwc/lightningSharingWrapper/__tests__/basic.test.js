// createElement is what we'll use to create our component under test
import { createElement } from 'lwc';

// Import module under test by convention <namespace>/<moduleName>
import lightningSharingWrapper from 'c/lightningSharingWrapper';
import { registerLdsTestWireAdapter } from '@salesforce/wire-service-jest-util';
import { getRecordUi } from 'lightning/uiRecordApi';

const mockGetRecordUI = require('./data/privateTestObjectRecordUI.json');

describe('loads outer component with data', () => {
    it('loads and has action buttons', () => {
        // const getRecordUIWireAdapter = registerLdsTestWireAdapter(getRecordUi);
        const element = createElement('c-lightning-sharing-wrapper', {
            is: lightningSharingWrapper
        });
        document.body.appendChild(element);

        // there should be action buttons
        const buttonGroup = element.shadowRoot.querySelector(
            'lightning-button-group'
        );
        expect(buttonGroup).toBeTruthy();

        const buttons = element.shadowRoot.querySelectorAll('lightning-button');
        expect(buttons).toHaveLength(2);
    });

    // it('loads a record from recordUi', async () => {
    //   const element = createElement('c-lightning-sharing-wrapper', {
    //     is: lightningSharingWrapper
    //   });
    //   document.body.appendChild(element);

    //   await getRecordUIWireAdapter.emit(mockGetRecordUI);

    //   const card = element.shadowRoot.querySelector('lightning-card');
    //   expect(card.title).toBe('PrivateTestObject__c: 0');
    // });

    // it('loads the child components', () => {});

    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });
});
