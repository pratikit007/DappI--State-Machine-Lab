'use strict';

const { Contract } = require('fabric-contract-api');

class InsuranceClaim extends Contract {

    async initclaimprocess(ctx) {
        console.log('============= START : Initialize Ledger ===========');
        const Claim = [
            {
                Policy_number: '0123456789',
                make: 'Toyota',
                model: 'Prius',
                accident_date: '03/04/21',
                accident_time: '01:05:00',
                accident_location: 'HumberDrive'
                number_passenger: 5,
                Name_driver: 'John Smith'
                Licence_number: '0TYY-456-KLH',
                car_plate: 'YZ4-1425',
                bedge_officer: "09GHJD-09-99',
                insurance_company: 'travelers',
                broker_id: 98989,
                Claim_reference_ID: 'trv-0304-2121-99',
                payment_ID: 'pyt-0909'
                medical_payment_ID:'med-04233232'
                death_benefit_payment_ID:'dth-8932-3232232'
                claim_closure_ID: 'trv-clsr-232-32'
            },
            
        ];

async function newClaim(claim) {
    let assetResource = "claim.privateAsset.id";
    let assetInsuranceOffer = await query('selectInsuranceCompanyByInsuredAsset', { privateAsset: assetResource });

    var claimId = claim.policyholder.id + '' + num_id
    var newClaim = factory.newResource( 'Claim', claimId)
    newClaim.policyholder = claim.policyholder
    newClaim.insuranceCompany = assetInsuranceOffer[0].insuranceCompany
    newClaim.description = claim.description
    newClaim.claimValue = claim.claimValue

    await assetRegistry.add(newClaim)
}
async function processClaim(handleClaim) {
    let Claim_reference_ID = await getAssetRegistry('org.acme.riskanalysis.Claim');

    if ( handleClaim.status === "denied" ) {
        handleClaim.claim.status = handleClaim.status
        await claimsAssetRegistry.update( handleClaim.claim )
        return true
    }

    if ( handleClaim.status === "accept" ) {
        handleClaim.claim.status = handleClaim.status
        await claimsAssetRegistry.update( handleClaim.claim.payment)
        return true
    }

    var costToPay = handleClaim.claim.claimValue;
    handleClaim.claim.policyholder.balance += costToPay;
    handleClaim.claim.status = handleClaim.status

    await claimsAssetRegistry.update(handleClaim.claim);
    await policyholderParticipantRegistry.update(handleClaim.claim.driver);

}

async function NewClaimDetailsSettlementPayment(Name_driver, insurance_company, amount){

	var payment ClaimDetailsSettlementPayment; 
	
	payment.Name_driver = Name_driver;
	payment.Amount        = Amount;
	payment.Status        = Status;

	return payment
}
    
async function payment(carNumber, make, model, color, Name_driver) {
        payment= claim.policyholder.balance += costToPay;
        payment_ID = payment_ID.insuranceCompany;
        console.log('============= Payment done ===========');
    }


async function AreAllPaymentsPaid(){
            if payment.Status != STATE_PAID { return false }
        }
    
        return true
    }
async function claimclosure(){
        console.log('============= END : Claim processed and closed ===========');
    }

}

}

module.exports = InsuranceClaim;
