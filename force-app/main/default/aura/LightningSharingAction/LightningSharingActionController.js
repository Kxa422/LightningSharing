({
    doInit: function (component) {
        $A.createComponent(
            'c:LightningSharing',
            {
                recordId: component.get('v.recordId')
            },
            function (content, status, errorMessage) {
                if (status === 'SUCCESS') {
                    var modalBody = content;
                    component
                        .find('modalService')
                        .showCustomModal({
                            //header: 'Sharing',
                            body: modalBody,
                            showCloseButton: false,
                            cssClass: 'fix-min-height slds-modal_large',
                            closeCallback: function (ovl) {}
                        })
                        .then(function (overlay) {});
                } else if (status === 'ERROR') {
                    console.log('Error: ' + errorMessage);
                    // Show error message
                }
            }
        );
    }
});
