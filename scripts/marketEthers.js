/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

const baseTokenAbi = () => {
    return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"burnByController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"to_","type":"address[]"},{"internalType":"uint256[]","name":"amounts_","type":"uint256[]"}],"name":"multiTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"from_","type":"address[]"},{"internalType":"address[]","name":"to_","type":"address[]"},{"internalType":"uint256[]","name":"amounts_","type":"uint256[]"}],"name":"multiTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{ "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }]`;
};

const marketAddressMainnet = "0xFD8f4aC172457FD30Df92395BC69d4eF6d92eDd4";
const marketAddressMainnetGated = "0x1b0EfFE43fe9b2A9B8Ada6060C1431cC7E5d77a3";
const marketAddressPolygon = "0x0225960D274966524C4Fafe3804386Df0F6B8742";
const marketAddressPolygonGated = "0x6A8E985890B3E4aa56b3A735577DEfAA89f28cD0";
const marketAddressOptimism = "0x4D479aAA35fc98DDd836f0270C46e4C52d93C731";
const marketAddressOptimismGated = "0x4D479aAA35fc98DDd836f0270C46e4C52d93C731";
const marketAddressArbitrum = "0x6c1b3eBd9Eb46679662b2ABDD28325B32C892FEa";
const marketAddressArbitrumGated = "0x1A5f06Fb0bAD93c5A92Ce99c295765bA49475A76";
const marketAddressTestnet = "0x07f4de9cDFf4FB65AC00166A1090D5a750FFA25b";
const marketAbi = () => {
    return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"registerer_","type":"address"},{"indexed":false,"internalType":"bool","name":"bool_","type":"bool"}],"name":"ContractAdministered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"registerer_","type":"address"},{"indexed":false,"internalType":"uint256","name":"registrationPrice_","type":"uint256"}],"name":"ContractRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"operator_","type":"address"},{"indexed":false,"internalType":"address","name":"unstuckOwner_","type":"address"}],"name":"GovernorUnstuckOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"operator_","type":"address"},{"indexed":false,"internalType":"address","name":"admin_","type":"address"},{"indexed":false,"internalType":"bool","name":"bool_","type":"bool"}],"name":"MarketAdminManaged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"operator_","type":"address"},{"indexed":false,"internalType":"bool","name":"bool_","type":"bool"}],"name":"OperatorManaged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"registerer_","type":"address"},{"indexed":false,"internalType":"string","name":"projectName_","type":"string"},{"indexed":false,"internalType":"string","name":"tokenImage_","type":"string"}],"name":"ProjectInfoPushed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"operator_","type":"address"},{"indexed":false,"internalType":"bool","name":"bool_","type":"bool"}],"name":"RequiresTokenManaged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"operator_","type":"address"},{"indexed":false,"internalType":"address","name":"token_","type":"address"}],"name":"TokenManaged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"operator_","type":"address"},{"indexed":false,"internalType":"address","name":"treasury_","type":"address"}],"name":"TreasuryManaged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"operator_","type":"address"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"item_","type":"tuple"}],"name":"WLVendingItemAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"gifted_","type":"address"},{"indexed":false,"internalType":"uint256","name":"index_","type":"uint256"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenImageUri","type":"string"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingObject","name":"object_","type":"tuple"}],"name":"WLVendingItemGifted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"operator_","type":"address"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"before_","type":"tuple"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"after_","type":"tuple"}],"name":"WLVendingItemModified","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"purchaser_","type":"address"},{"indexed":false,"internalType":"uint256","name":"index_","type":"uint256"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenImageUri","type":"string"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingObject","name":"object_","type":"tuple"}],"name":"WLVendingItemPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":true,"internalType":"address","name":"operator_","type":"address"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"item_","type":"tuple"}],"name":"WLVendingItemRemoved","type":"event"},{"inputs":[{"internalType":"address","name":"collector_","type":"address"}],"name":"G_setRegistrationCollector","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"price_","type":"uint256"}],"name":"G_setRegistrationPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver_","type":"address"}],"name":"G_withdrawMESfromContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"MES","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"governor_","type":"address"}],"name":"O_setGovernorAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"O_setMES","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"O_setOwnershipController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"O_setPriceController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"superGovernor_","type":"address"}],"name":"O_setSuperGovernorAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"O_setTokenController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"OwnershipController","outputs":[{"internalType":"contract IOwnershipController","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PriceController","outputs":[{"internalType":"contract IPriceController","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"string","name":"projectName_","type":"string"},{"internalType":"string","name":"tokenName_","type":"string"},{"internalType":"string","name":"tokenImage_","type":"string"}],"name":"SG_SetContractToProjectInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"bool","name":"bool_","type":"bool"}],"name":"SG_SetContractToVending","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"unstuckOwner_","type":"address"}],"name":"SG_SetStuckOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TokenController","outputs":[{"internalType":"contract ITokenController","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem","name":"WLVendingItem_","type":"tuple"}],"name":"addWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"burnAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"contractOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"contractToControllersApproved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToMESRegistry","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"contractToMarketAdminsApproved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToProjectInfo","outputs":[{"internalType":"string","name":"projectName","type":"string"},{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenImageUri","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToTreasuryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"contractToWLPurchased","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"contractToWLPurchasers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"contractToWLVendingItems","outputs":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"deleteMostRecentWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"enabledContracts","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"enabledContractsIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllEnabledContracts","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"getDefaultTokenImageOfContract","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"getDefaultTokenNameOfContract","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"getDefaultTokenOfContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"getFixedPriceOfItem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"getTreasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"getWLPurchasersOf","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"getWLVendingItemsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"getWLVendingObject","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenImageUri","type":"string"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingObject","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"start_","type":"uint256"},{"internalType":"uint256","name":"end_","type":"uint256"}],"name":"getWLVendingObjectsPaginated","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenImageUri","type":"string"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingObject[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"},{"internalType":"address","name":"giftedAddress_","type":"address"}],"name":"giftPurchaserAsMarketAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"governorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"operator_","type":"address"}],"name":"isAuthorized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"sender_","type":"address"}],"name":"isContractOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"operator_","type":"address"},{"internalType":"bool","name":"bool_","type":"bool"}],"name":"manageController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"operator_","type":"address"},{"internalType":"bool","name":"bool_","type":"bool"}],"name":"manageMarketAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem","name":"WLVendingItem_","type":"tuple"}],"name":"modifyWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"purchaseWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"raw_getWLVendingItemsAll","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"start_","type":"uint256"},{"internalType":"uint256","name":"end_","type":"uint256"}],"name":"raw_getWLVendingItemsPaginated","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"startTime","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"registerContractToVending","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"string","name":"projectName_","type":"string"},{"internalType":"string","name":"tokenName_","type":"string"},{"internalType":"string","name":"tokenImage_","type":"string"}],"name":"registerProjectInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"registrationCollector","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"registrationPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"requiresTokenOwnership","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"bool","name":"bool_","type":"bool"}],"name":"setRequiresTokenOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"treasury_","type":"address"}],"name":"setTreasuryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"superGovernorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"new_","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
};

const ownershipControllerMainnet = "0x7B41E6Cb678F8e12134a645fb341F928DA91A17b";
const ownershipControllerPolygon = "0xD17d4B1FC1F25190cce1f0A408380208Be70B900";
const ownershipControllerOptimism = "0x9B13Df2AcBB95465BcA3280C44819efb653860f9";
const ownershipControllerArbitrum = "0x9bF9F39827C56bAEE6759038e731dd5236f6f2E0";
const ownershipControllerAbi = () => {
    return `[{"inputs":[],"name":"MM","outputs":[{"internalType":"contract IMartianMarket","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address[]","name":"ownerships_","type":"address[]"}],"name":"addContractToOwnershipAccess","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"contractToOwnershipTokens","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"wallet_","type":"address"}],"name":"hasOwnershipOfToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setMM","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"new_","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"wipeContractToOwnershipAccessData","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
};

const networkToBlockExplorer = {
    1: "https://etherscan.io",
    4: "https://rinkeby.etherscan.io",
    10: "https://optimistic.etherscan.io",
    137: "https://polygonscan.com",
    42161: "https://arbiscan.io"
}
const tokenImgURL = "https://github.com/saintmaxi/mtmtest/blob/main/images/mes.png?raw=true";

/*********************************************************************************/
/***********************************DEV CONFIG************************************/
/*********************************************************************************/

// const baseTokenAbi = () => { 
//     return `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"burnByController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"to_","type":"address[]"},{"internalType":"uint256[]","name":"amounts_","type":"uint256[]"}],"name":"multiTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"from_","type":"address[]"},{"internalType":"address[]","name":"to_","type":"address[]"},{"internalType":"uint256[]","name":"amounts_","type":"uint256[]"}],"name":"multiTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]`;
// };

// const marketAddress = "0x9D82e4140A798FB261eA1fE315f0A2c723D192d0";
// const marketAbi = () => {
//     return `[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"registerer_","type":"address"},{"indexed":false,"internalType":"bool","name":"bool_","type":"bool"}],"name":"ContractAdministered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"registerer_","type":"address"},{"indexed":false,"internalType":"uint256","name":"registrationPrice_","type":"uint256"}],"name":"ContractRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"operator_","type":"address"},{"indexed":false,"internalType":"bool","name":"bool_","type":"bool"}],"name":"OperatorManaged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"registerer_","type":"address"},{"indexed":false,"internalType":"string","name":"projectName_","type":"string"},{"indexed":false,"internalType":"string","name":"tokenImage_","type":"string"}],"name":"ProjectInfoPushed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"address","name":"treasury_","type":"address"}],"name":"TreasuryManaged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"string","name":"title_","type":"string"},{"indexed":false,"internalType":"string","name":"imageUri_","type":"string"},{"indexed":false,"internalType":"string","name":"projectUri_","type":"string"},{"indexed":false,"internalType":"string","name":"description_","type":"string"},{"indexed":false,"internalType":"uint32","name":"amountAvailable_","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"deadline_","type":"uint32"},{"indexed":false,"internalType":"uint256","name":"price_","type":"uint256"}],"name":"WLVendingItemAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"before_","type":"tuple"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"after_","type":"tuple"}],"name":"WLVendingItemModified","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"contract_","type":"address"},{"indexed":false,"internalType":"uint256","name":"index_","type":"uint256"},{"indexed":false,"internalType":"address","name":"buyer_","type":"address"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"item_","type":"tuple"}],"name":"WLVendingItemPurchased","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct MartianMarketWL.WLVendingItem","name":"item_","type":"tuple"}],"name":"WLVendingItemRemoved","type":"event"},{"inputs":[],"name":"MES","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"string","name":"title_","type":"string"},{"internalType":"string","name":"imageUri_","type":"string"},{"internalType":"string","name":"projectUri_","type":"string"},{"internalType":"string","name":"description_","type":"string"},{"internalType":"uint32","name":"amountAvailable_","type":"uint32"},{"internalType":"uint32","name":"deadline_","type":"uint32"},{"internalType":"uint256","name":"price_","type":"uint256"}],"name":"addWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"contractToControllersApproved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToProjectInfo","outputs":[{"internalType":"string","name":"projectName","type":"string"},{"internalType":"string","name":"tokenImageUri","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contractToTreasuryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"contractToWLPurchased","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"contractToWLPurchasers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"contractToWLVendingItems","outputs":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"deleteMostRecentWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"enabledContracts","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"enabledContractsIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllEnabledContracts","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"getWLPurchasersOf","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"getWLVendingItemsAll","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"getWLVendingItemsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"start_","type":"uint256"},{"internalType":"uint256","name":"end_","type":"uint256"}],"name":"getWLVendingItemsPaginated","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"governorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"operator_","type":"address"},{"internalType":"bool","name":"bool_","type":"bool"}],"name":"manageController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"imageUri","type":"string"},{"internalType":"string","name":"projectUri","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint32","name":"amountAvailable","type":"uint32"},{"internalType":"uint32","name":"amountPurchased","type":"uint32"},{"internalType":"uint32","name":"deadline","type":"uint32"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MartianMarketWL.WLVendingItem","name":"WLVendingItem_","type":"tuple"}],"name":"modifyWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"string","name":"projectName_","type":"string"},{"internalType":"string","name":"tokenImage_","type":"string"}],"name":"ownerSetContractToProjectInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"bool","name":"bool_","type":"bool"}],"name":"ownerSetContractToVending","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"uint256","name":"index_","type":"uint256"}],"name":"purchaseWLVendingItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"}],"name":"registerContractToVending","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"string","name":"projectName_","type":"string"},{"internalType":"string","name":"tokenImage_","type":"string"}],"name":"registerProjectInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"registrationPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"governor_","type":"address"}],"name":"setGovernorAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setMES","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"price_","type":"uint256"}],"name":"setRegistrationPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contract_","type":"address"},{"internalType":"address","name":"treasury_","type":"address"}],"name":"setTreasuryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"new_","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
// };

// const networkToBlockExplorer = {
//     1: "https://etherscan.io",
//     4: "https://rinkeby.etherscan.io",
//     10: "https://optimistic.etherscan.io",
//     137: "https://polygonscan.com",
//     42161: "https://arbiscan.io"
// }
// const tokenImgURL = "https://github.com/saintmaxi/mtmtest/blob/main/images/mes.png?raw=true";

/*********************************END CONFIG************************************/

if (window.ethereum == undefined) {
    displayErrorMessage('Use a web3 enabled browser to browse listings!');
}

// Initiate Provider 
const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
const signer = provider.getSigner();

// General Functions
const connect = async () => { await provider.send("eth_requestAccounts", []) };
const getAddress = async () => { try { return await signer.getAddress(); } catch { return false; } };
const formatEther = (balance_) => { return ethers.utils.formatEther(balance_) }; // divides by 18 modulus
const parseEther = (eth_) => { return ethers.utils.parseEther(eth_) }; // multiplies by 18 modulus
const getChainId = async () => { return await signer.getChainId() };

let currentChain;

// Initiate Contracts
let market;
let marketGated;
let ownershipController;
let marketAddress;
let marketAddressGated;
let ownershipControllerAddress;

let gatedCollections;
let ungatedCollections;

const setMarket = async () => {
    currentChain = await getChainId();
    if (currentChain == 1) {
        marketAddress = marketAddressMainnet;
        marketAddressGated = marketAddressMainnetGated;
        ownershipControllerAddress = ownershipControllerMainnet
    }
    else if (currentChain == 4) {
        marketAddress = marketAddressTestnet;
    }
    else if (currentChain == 10) {
        marketAddress = marketAddressOptimism;
        marketAddressGated = marketAddressOptimismGated;
        ownershipControllerAddress = ownershipControllerOptimism
    }
    else if (currentChain == 42161) {
        marketAddress = marketAddressArbitrum;
        marketAddressGated = marketAddressArbitrumGated;
        ownershipControllerAddress = ownershipControllerArbitrum
    }
    else if (currentChain == 137) {
        marketAddress = marketAddressPolygon;
        marketAddressGated = marketAddressPolygonGated;
        ownershipControllerAddress = ownershipControllerPolygon
    }
    market = new ethers.Contract(marketAddress, marketAbi(), signer);
    marketGated = new ethers.Contract(marketAddressGated, marketAbi(), signer);
    ownershipController = new ethers.Contract(ownershipControllerAddress, ownershipControllerAbi(), signer);
}

// General Variables
const maxInt = "115792089237316195423570985008687907853269984665640564039457584007913129639935";

const loadingDiv = `<div id="ex1" class="partner-collection example">
                        <div class="cover">
                            <button class="button" onclick="connect()">LOADING<span class="one">.</span><span class="two">.</span><span class="three">.</span></button>
                        </div>
                        <h4 class="end-time">--:--:--</h4>
                        <img class="collection-img" src="./images/question.jpeg">
                        <div class="collection-info">
                            <h3>???</h3>
                            <h4>??? $TOKEN
                            <br>
                            ???/??? Purchased
                            </h4>
                            <div class="inside-text collection-description">Lorem ipsum dolor sit amet.
                            </div>
                            <button class="button">PURCHASE</button>
                        </div>
                    </div>`

// Approval Functions

let currentTokenAddress;
let currentTokenImageURI;

const selectProject = async (address) => {
    if (address) {
        if (gatedCollections.includes(address)) {
            let isGated = await marketGated.requiresTokenOwnership(address);
            if (isGated) {
                let userAddress = await getAddress();
                let ownsToken = await ownershipController.hasOwnershipOfToken(address, userAddress);
                if (!ownsToken) {
                    let permittedCollections = [];
                    let reachedError = false;
                    let index = 0;
                    while (!reachedError) {
                        try {
                            let permittedCollection = await ownershipController.contractToOwnershipTokens(address, index);
                            permittedCollections.push(permittedCollection)
                            index += 1;
                        }
                        catch {
                            reachedError = true;
                        }
                    }
                    let permittedCollectionsJSX = permittedCollections.map(collection => `<a class="link" target="_blank" href="${networkToBlockExplorer[currentChain]}/address/${collection}">${collection}</a>`);
                    $("#permitted-collections").html(permittedCollectionsJSX.join("<br>"))
                    $("#gated-wrapper").removeClass("hidden");
                }
            }
            $("#approval-button").attr("onclick", "approveTokenToGatedMarket()")
        }
        else {
            $("#gated-wrapper").addClass("hidden");
            $("#approval-button").attr("onclick", "approveTokenToMarket()")
        }
        $("#approval-button").html(`APPROVE`);
        $("#scroll-indicator").addClass("hidden");
        $("#uniswap-icon").removeClass("hidden");
        $("#uniswap-window").attr("src", `https://app.uniswap.org/#/swap?exactField=input&exactAmount=1&inputCurrency=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2&outputCurrency=${address}`);
        $("#token-balance").html(`<span class="one">.</span><span class="two">.</span><span class="three">.</span>`);
        $("#live-collections").empty();
        $("#past-collections").empty();
        $("#live-collections").append(loadingDiv);
        $("#past-collections").append(loadingDiv);
        $("#num-live").html(`<br>(<span class="one">.</span><span class="two">.</span><span class="three">.</span>)`);
        $("#num-past").html(`<br>(<span class="one">.</span><span class="two">.</span><span class="three">.</span>)`);
        let projectInfo = await market.contractToProjectInfo(address);
        $("#approval-project").html(projectInfo.projectName);

        let tokenName = (projectInfo.tokenName[0] == "$") ? projectInfo.tokenName.substring(1).toUpperCase() : projectInfo.tokenName.toUpperCase();

        $("#approval-token").html(tokenName);
        $("#approval-token-2").html(tokenName);

        currentTokenAddress = address;
        currentTokenImageURI = (projectInfo.tokenImageUri).includes("https://") ? projectInfo.tokenImageUri : `https://${projectInfo.tokenImageUri}`;

        await checkTokenApproval();
        await loadCollections();
        await updateTokenBalance();

        if ($("#live-button").hasClass("active")) {
            showLive();
        }
        else {
            showPast();
        }
    }
}

const approveTokenToMarket = async () => {
    const token = new ethers.Contract(currentTokenAddress, baseTokenAbi(), signer);
    await token.approve(marketAddress, maxInt).then(async (tx_) => {
        await waitForTransaction(tx_, false);
        $("#approval-button").html(`Approving<span class="one">.</span><span class="two">.</span><span class="three">.</span>`)
    });
}

const approveTokenToGatedMarket = async () => {
    const token = new ethers.Contract(currentTokenAddress, baseTokenAbi(), signer);
    await token.approve(marketAddressGated, maxInt).then(async (tx_) => {
        await waitForTransaction(tx_, false);
        $("#approval-button").html(`Approving<span class="one">.</span><span class="two">.</span><span class="three">.</span>`)
    });
}

const checkTokenApproval = async () => {
    if (currentTokenAddress) {
        const userAddress = await getAddress();
        const token = new ethers.Contract(currentTokenAddress, baseTokenAbi(), signer);

        if (gatedCollections.includes(currentTokenAddress)) {
            if (Number(await token.allowance(userAddress, marketAddressGated)) >= maxInt) {
                $("#approval").addClass("hidden");
            }
            else {
                $("#approval").removeClass("hidden");
            }
        }
        else {
            if (Number(await token.allowance(userAddress, marketAddress)) >= maxInt) {
                $("#approval").addClass("hidden");
            }
            else {
                $("#approval").removeClass("hidden");
            }
        }

        if ($("#approval").hasClass("hidden") && $("#set-discord").hasClass("hidden")) {
            $("#onboarding-alert").addClass("hidden");
            $("#onboarding-wrapper").addClass("hidden");
        }
        else {
            $("#onboarding-alert").removeClass("hidden");
            $("#onboarding-wrapper").removeClass("hidden");
        }
    }
};

const updateTokenBalance = async () => {
    if (currentTokenAddress) {
        const userAddress = await getAddress();
        const token = new ethers.Contract(currentTokenAddress, baseTokenAbi(), signer);
        let balance = Number(formatEther((await token.balanceOf(userAddress)))).toFixed(1);
        $("#token-balance").html(`${balance} <img src="${currentTokenImageURI}" class="token-icon">`);
    }
}

let loadedCollections = false;
let liveListings = [];
let pendingListings = [];
let liveTimerPending = [];
let pendingTimerPending = [];

let liveListingsGated = [];
let pendingListingsGated = [];
let liveTimerPendingGated = [];
let pendingTimerPendingGated = [];

setInterval(async () => {
    if (loadedCollections) {
        for (let i = 0; i < liveListings.length; i++) {
            if (liveTimerPending[i]) {
                let id = liveListings[i];
                let now = Date.now() / 1000;
                let endTime = Number((await market.contractToWLVendingItems(currentTokenAddress, id)).endTime);
                let distance = endTime - now;

                let hours = Math.floor(distance / (60 * 60));
                let minutes = Math.floor((distance % (60 * 60)) / (60));
                let seconds = Math.floor((distance % (60)));

                if (hours < 10) {
                    hours = `0${hours}`;
                }
                if (minutes < 10) {
                    minutes = `0${minutes}`;
                }
                if (seconds < 10) {
                    seconds = `0${seconds}`;
                }

                if (distance <= 0) {
                    let blockTime = (await provider.getBlock((await provider.getBlockNumber()))).timestamp;
                    if (blockTime > endTime) {
                        liveTimerPending[i] = false;
                        $(`#timer-${id}`).html("EXPIRED");
                        $(`#timer-${id}`).removeClass("pending");
                    }
                    else {
                        $(`#timer-${id}`).html(`ENDS NEXT BLOCK<span class="one">.</span><span class="two">.</span><span class="three">.</span>`);
                    }
                }
                else {
                    $(`#timer-${id}`).html(`ENDS IN ${hours}:${minutes}:${seconds}`);
                    $(`#timer-${id}`).addClass("pending");
                }
            }
        }
    }
}, 1000)

setInterval(async () => {
    if (loadedCollections) {
        for (let i = 0; i < liveListingsGated.length; i++) {
            if (liveTimerPendingGated[i]) {
                let id = liveListingsGated[i];
                let now = Date.now() / 1000;
                let endTime = Number((await marketGated.contractToWLVendingItems(currentTokenAddress, id)).endTime);
                let distance = endTime - now;

                let hours = Math.floor(distance / (60 * 60));
                let minutes = Math.floor((distance % (60 * 60)) / (60));
                let seconds = Math.floor((distance % (60)));

                if (hours < 10) {
                    hours = `0${hours}`;
                }
                if (minutes < 10) {
                    minutes = `0${minutes}`;
                }
                if (seconds < 10) {
                    seconds = `0${seconds}`;
                }

                if (distance <= 0) {
                    let blockTime = (await provider.getBlock((await provider.getBlockNumber()))).timestamp;
                    if (blockTime > endTime) {
                        liveTimerPendingGated[i] = false;
                        $(`#timer-${id}-gated`).html("EXPIRED");
                        $(`#timer-${id}-gated`).removeClass("pending");
                    }
                    else {
                        $(`#timer-${id}-gated`).html(`ENDS NEXT BLOCK<span class="one">.</span><span class="two">.</span><span class="three">.</span>`);
                    }
                }
                else {
                    $(`#timer-${id}-gated`).html(`ENDS IN ${hours}:${minutes}:${seconds}`);
                    $(`#timer-${id}-gated`).addClass("pending");
                }
            }
        }
    }
}, 1000)

setInterval(async () => {
    if (loadedCollections) {
        for (let i = 0; i < pendingListings.length; i++) {
            if (pendingTimerPending[i]) {
                let id = pendingListings[i];
                let now = Date.now() / 1000;
                let startTime = Number((await market.contractToWLVendingItems(currentTokenAddress, id)).startTime);
                let distance = startTime - now;

                let hours = Math.floor(distance / (60 * 60));
                let minutes = Math.floor((distance % (60 * 60)) / (60));
                let seconds = Math.floor((distance % (60)));

                if (hours < 10) {
                    hours = `0${hours}`;
                }
                if (minutes < 10) {
                    minutes = `0${minutes}`;
                }
                if (seconds < 10) {
                    seconds = `0${seconds}`;
                }

                if (distance <= 0) {
                    let blockTime = (await provider.getBlock((await provider.getBlockNumber()))).timestamp;
                    if (blockTime > startTime) {
                        pendingTimerPending[i] = false;
                        $(`#timer-${id}`).html("LIVE NOW");
                        $(`#timer-${id}`).removeClass("pending");
                    }
                    else {
                        $(`#timer-${id}`).html(`LIVE NEXT BLOCK<span class="one">.</span><span class="two">.</span><span class="three">.</span>`);
                    }
                }
                else {
                    $(`#timer-${id}`).html(`LIVE IN ${hours}:${minutes}:${seconds}`);
                    $(`#timer-${id}`).addClass("pending");
                }
            }
        }
    }
}, 1000)

setInterval(async () => {
    if (loadedCollections) {
        for (let i = 0; i < pendingListingsGated.length; i++) {
            if (pendingTimerPendingGated[i]) {
                let id = pendingListingsGated[i];
                let now = Date.now() / 1000;
                let startTime = Number((await marketGated.contractToWLVendingItems(currentTokenAddress, id)).startTime);
                let distance = startTime - now;

                let hours = Math.floor(distance / (60 * 60));
                let minutes = Math.floor((distance % (60 * 60)) / (60));
                let seconds = Math.floor((distance % (60)));

                if (hours < 10) {
                    hours = `0${hours}`;
                }
                if (minutes < 10) {
                    minutes = `0${minutes}`;
                }
                if (seconds < 10) {
                    seconds = `0${seconds}`;
                }

                if (distance <= 0) {
                    let blockTime = (await provider.getBlock((await provider.getBlockNumber()))).timestamp;
                    if (blockTime > startTime) {
                        pendingTimerPendingGated[i] = false;
                        $(`#timer-${id}`).html("LIVE NOW");
                        $(`#timer-${id}`).removeClass("pending");
                    }
                    else {
                        $(`#timer-${id}-gated`).html(`LIVE NEXT BLOCK<span class="one">.</span><span class="two">.</span><span class="three">.</span>`);
                    }
                }
                else {
                    $(`#timer-${id}-gated`).html(`LIVE IN ${hours}:${minutes}:${seconds}`);
                    $(`#timer-${id}-gated`).addClass("pending");
                }
            }
        }
    }
}, 1000)

const purchase = async (tokenAddress, id, gated) => {
    try {
        if (!discordSet) {
            await displayErrorMessage("Error: Must set Discord ID to associate with purchases!")
            await promptForDiscord();
        }
        else {
            if (gated) {
                const gasLimit = await marketGated.estimateGas.purchaseWLVendingItem(tokenAddress, id);
                const newGasLimit = parseInt((gasLimit * 1.15)).toString();
                await marketGated.purchaseWLVendingItem(tokenAddress, id, { gasLimit: newGasLimit }).then(async (tx_) => {
                    await waitForTransaction(tx_);
                });
            }
            else {
                const gasLimit = await market.estimateGas.purchaseWLVendingItem(tokenAddress, id);
                const newGasLimit = parseInt((gasLimit * 1.15)).toString();
                await market.purchaseWLVendingItem(tokenAddress, id, { gasLimit: newGasLimit }).then(async (tx_) => {
                    await waitForTransaction(tx_);
                });
            }
        }
    }
    catch (error) {
        console.log(error.message)
        if ((error.message).includes("Already purchased")) {
            await displayErrorMessage(`Error: You already purchased a slot!`);
        }
        else if ((error.message).includes("Not allowed to purchase!")) {
            await displayErrorMessage(`Error: Must hold a permitted collection!`);
        }
        else if ((error.message).includes("This WLVendingItem does not exist!")) {
            await displayErrorMessage(`Error: Item does not exist!`);
        }
        else if ((error.message).includes("No more WL remaining")) {
            await displayErrorMessage(`Error: No spots left!`);
        }
        else if ((error.message).includes("Passed deadline")) {
            await displayErrorMessage(`Error: Listing expired!`);
        }
        else if ((error.message).includes("Not enough tokens")) {
            await displayErrorMessage(`Error: Not enough tokens!`);
        }
        else if ((error.message).includes("transfer amount exceeds allowance")) {
            await displayErrorMessage(`Error: Market not approved to spend token!`);
        }
        else if ((error.message).includes("User denied transaction signature")) {
            console.log("Transaction rejected.");
        }
        else if ((error.message).includes("User rejected the transaction")) {
            console.log("Transaction rejected.");
        }
        else if ((error.message).includes("Not started yet")) {
            await displayErrorMessage(`Error: Listing not started yet!`);
        }
        else if ((error.message).includes("execution reverted")) {
            await displayErrorMessage(`Error: Approve token spend at top of page!`);
        }
        else {
            await displayErrorMessage("An error occurred. See console and window alert for details...")
            window.alert(JSON.stringify(error));
            console.log(error);
        }
    }
}

const splitArrayToChunks = (array_, chunkSize_) => {
    let _arrays = Array(Math.ceil(array_.length / chunkSize_))
        .fill()
        .map((_, index) => index * chunkSize_)
        .map((begin) => array_.slice(begin, begin + chunkSize_));

    return _arrays;
};

const loadCollections = async () => {
    if (!currentTokenAddress) return;
    liveListings = [];
    pendingListings = [];
    liveTimerPending = [];
    pendingTimerPending = [];
    loadedCollections = false;

    const userAddress = await getAddress();
    let liveJSX = "";
    let pastJSX = "";
    let numLive = 0;
    let numPast = 0;
    let idToLiveJSX = new Map();
    let idToPastJSX = new Map();
    let numUngated = 0;

    if (ungatedCollections.includes(currentTokenAddress)) {
        numUngated = Number(await market.getWLVendingItemsLength(currentTokenAddress));
        let allItems;
        if (numUngated > 0) {
            allItems = await market.getWLVendingObjectsPaginated(currentTokenAddress, 0, numUngated - 1);
        }
        else {
            allItems = [];
        }
        let allItemIds = Array.from(Array(numUngated).keys());
        const chunks = splitArrayToChunks(allItemIds, 5);

        for (const chunk of chunks) {
            await Promise.all(chunk.map(async (id) => {
                // WL data from contract
                let WLinfo = allItems[id];
                let collectionPrice = Number(formatEther(WLinfo.price));
                let purchased = await market.contractToWLPurchased(currentTokenAddress, id, userAddress);

                // Data from JSON file
                let maxSlots = WLinfo.amountAvailable;
                let minted = WLinfo.amountPurchased;
                let started = (Date.now() / 1000) > WLinfo.startTime;
                let valid = WLinfo.endTime > (Date.now() / 1000);
                let imageUri = (WLinfo.imageUri).includes("https://") ? WLinfo.imageUri : `https://${WLinfo.imageUri}`;
                let projectUri = (WLinfo.projectUri).includes("https://") ? WLinfo.projectUri : `https://${WLinfo.projectUri}`;

                if (started && valid) {
                    liveListings.push(id);
                    liveTimerPending.push(true);
                    dateString = `Ends ${(new Date(WLinfo.endTime * 1000)).toLocaleDateString()} ${(new Date(WLinfo.endTime * 1000)).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
                }
                else if (!started && valid) {
                    pendingListings.push(id);
                    pendingTimerPending.push(true);
                    dateString = `Starts ${(new Date(WLinfo.startTime * 1000)).toLocaleDateString()} ${(new Date(WLinfo.startTime * 1000)).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
                }

                if (minted != maxSlots && valid) {
                    numLive += 1;
                    let button;
                    if (purchased) {
                        button = `<button disabled class="mint-prompt-button button purchased" id="${id}-mint-button">PURCHASED!</button>`;
                    }
                    else {
                        button = `<button class="mint-prompt-button button" id="${id}-mint-button" onclick="purchase('${currentTokenAddress}', ${id}, false)">PURCHASE</button>`;
                    }
                    let fakeJSX = `<div class="partner-collection" id="project-${id}">
                                    <a class="clickable link" href="${projectUri}" target="_blank" style="text-decoration: none;"><img class="website" src="./images/website.png"></a>
                                    <h4 class="end-time" id="timer-${id}"><span class="one">.</span><span class="two">.</span><span class="three">.</span></h4>
                                    <img class="collection-img" src="${imageUri}">
                                    <div class="collection-info">
                                        <h3>${(WLinfo.title).toUpperCase()}</h3>
                                        <h4>${collectionPrice} <img src="${currentTokenImageURI}" class="token-icon">
                                        <br>
                                        <span id="${id}-supply">${minted}</span>/<span id="${id}-max-supply">${maxSlots}</span> Purchased
                                        </h4>
                                        <div class="inside-text collection-description">
                                        ${(WLinfo.description).replaceAll("\n", "<br>")}
                                        </div>
                                    </div>
                                    ${button}
                                    </div>`

                    idToLiveJSX.set(id, fakeJSX);
                }
                else {
                    numPast += 1;
                    let button;
                    if (purchased) {
                        button = `<button disabled class="mint-prompt-button button purchased" id="${id}-mint-button">PURCHASED!</button>`;
                    }
                    else if (!valid) {
                        button = `<button disabled class="mint-prompt-button button purchased" id="${id}-mint-button">EXPIRED</button>`;
                    }
                    else if (minted == maxSlots) {
                        button = `<button disabled class="mint-prompt-button button purchased" id="${id}-mint-button">SOLD OUT</button>`;
                    }
                    let fakeJSX = `<div class="partner-collection" id="project-${id}">
                                    <a class="clickable link" href="${projectUri}" target="_blank" style="text-decoration: none;"><img class="website" src="./images/website.png"></a>
                                    <img class="collection-img" src="${imageUri}">
                                    <div class="collection-info">
                                        <h3>${(WLinfo.title).toUpperCase()}</h3>
                                        <h4>${collectionPrice} <img src="${currentTokenImageURI}" class="token-icon"> <br> <span id="${id}-supply">${minted}</span>/<span id="${id}-max-supply">${maxSlots}</span> Purchased</h4>
                                        <div class="inside-text collection-description">
                                        ${(WLinfo.description).replaceAll("\n", "<br>")}
                                        </div>
                                    </div>
                                    ${button}
                                    </div>`

                    idToPastJSX.set(id, fakeJSX);
                }
            }));
        }
    }

    if (gatedCollections.includes(currentTokenAddress)) {
        const numCollections = Number(await marketGated.getWLVendingItemsLength(currentTokenAddress));
        let allItems;
        if (numCollections > 0) {
            allItems = await marketGated.getWLVendingObjectsPaginated(currentTokenAddress, 0, numCollections - 1);
        }
        else {
            allItems = [];
        }
        let allItemIds = Array.from(Array(numCollections).keys());
        const chunks = splitArrayToChunks(allItemIds, 5);


        for (const chunk of chunks) {
            await Promise.all(chunk.map(async (id) => {
                // WL data from contract
                let WLinfo = allItems[id];
                let collectionPrice = Number(formatEther(WLinfo.price));
                let purchased = await marketGated.contractToWLPurchased(currentTokenAddress, id, userAddress);

                // Data from JSON file
                let maxSlots = WLinfo.amountAvailable;
                let minted = WLinfo.amountPurchased;
                let started = (Date.now() / 1000) > WLinfo.startTime;
                let valid = WLinfo.endTime > (Date.now() / 1000);
                let imageUri = (WLinfo.imageUri).includes("https://") ? WLinfo.imageUri : `https://${WLinfo.imageUri}`;
                let projectUri = (WLinfo.projectUri).includes("https://") ? WLinfo.projectUri : `https://${WLinfo.projectUri}`;

                if (started && valid) {
                    liveListingsGated.push(id);
                    liveTimerPendingGated.push(true);
                    dateString = `Ends ${(new Date(WLinfo.endTime * 1000)).toLocaleDateString()} ${(new Date(WLinfo.endTime * 1000)).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
                }
                else if (!started && valid) {
                    pendingListingsGated.push(id);
                    pendingTimerPendingGated.push(true);
                    dateString = `Starts ${(new Date(WLinfo.startTime * 1000)).toLocaleDateString()} ${(new Date(WLinfo.startTime * 1000)).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
                }

                if (minted != maxSlots && valid) {
                    numLive += 1;
                    let button;
                    if (purchased) {
                        button = `<button disabled class="mint-prompt-button button purchased" id="${id}-mint-button-gated">PURCHASED!</button>`;
                    }
                    else {
                        button = `<button class="mint-prompt-button button" id="${id}-mint-button-gated" onclick="purchase('${currentTokenAddress}', ${id}, true)">PURCHASE</button>`;
                    }
                    let fakeJSX = `<div class="partner-collection" id="project-${id}-gated">
                                    <a class="clickable link" href="${projectUri}" target="_blank" style="text-decoration: none;"><img class="website" src="./images/website.png"></a>
                                    <h4 class="end-time" id="timer-${id}-gated"><span class="one">.</span><span class="two">.</span><span class="three">.</span></h4>
                                    <img class="collection-img" src="${imageUri}">
                                    <div class="collection-info">
                                        <h3>${(WLinfo.title).toUpperCase()}</h3>
                                        <h4>${collectionPrice} <img src="${currentTokenImageURI}" class="token-icon">
                                        <br>
                                        <span id="${id}-supply-gated">${minted}</span>/<span id="${id}-max-supply">${maxSlots}</span> Purchased
                                        </h4>
                                        <div class="inside-text collection-description">
                                        ${(WLinfo.description).replaceAll("\n", "<br>")}
                                        </div>
                                    </div>
                                    ${button}
                                    </div>`

                    idToLiveJSX.set(id, fakeJSX);
                }
                else {
                    numPast += 1;
                    let button;
                    if (purchased) {
                        button = `<button disabled class="mint-prompt-button button purchased" id="${id}-mint-button-gated">PURCHASED!</button>`;
                    }
                    else if (!valid) {
                        button = `<button disabled class="mint-prompt-button button purchased" id="${id}-mint-button-gated">EXPIRED</button>`;
                    }
                    else if (minted == maxSlots) {
                        button = `<button disabled class="mint-prompt-button button purchased" id="${id}-mint-button-gated">SOLD OUT</button>`;
                    }
                    let fakeJSX = `<div class="partner-collection" id="project-${id}">
                                    <a class="clickable link" href="${projectUri}" target="_blank" style="text-decoration: none;"><img class="website" src="./images/website.png"></a>
                                    <img class="collection-img" src="${imageUri}">
                                    <div class="collection-info">
                                        <h3>${(WLinfo.title).toUpperCase()}</h3>
                                        <h4>${collectionPrice} <img src="${currentTokenImageURI}" class="token-icon"> <br> <span id="${id}-supply-gated">${minted}</span>/<span id="${id}-max-supply">${maxSlots}</span> Purchased</h4>
                                        <div class="inside-text collection-description">
                                        ${(WLinfo.description).replaceAll("\n", "<br>")}
                                        </div>
                                    </div>
                                    ${button}
                                    </div>`

                    idToPastJSX.set(id + numUngated, fakeJSX);
                }
            }));
        }
    }

    let liveIds = Array.from(idToLiveJSX.keys()).map(Number).sort(function (a, b) { return b - a });
    let pastIds = Array.from(idToPastJSX.keys()).map(Number).sort(function (a, b) { return b - a });
    for (const liveId of liveIds) {
        liveJSX += idToLiveJSX.get(liveId);
    }
    for (const pastId of pastIds) {
        pastJSX += idToPastJSX.get(pastId);
    }

    $("#live-collections").empty();
    $("#past-collections").empty();
    $("#live-collections").append(liveJSX);
    $("#past-collections").append(pastJSX);
    $("#num-live").html(`<br>(${numLive})`);
    $("#num-past").html(`<br>(${numPast})`);
    loadedCollections = true;
}

const updateSupplies = async () => {
    let userAddress = await getAddress();
    let numListings = Number(await market.getWLVendingItemsLength(currentTokenAddress));
    for (let id = 0; id < numListings; id++) {
        let buyers = await market.getWLPurchasersOf(currentTokenAddress, id);
        let WLinfo = await market.contractToWLVendingItems(currentTokenAddress, id);
        let maxSlots = WLinfo.amountAvailable;
        let minted = WLinfo.amountPurchased;
        let purchased = buyers.includes(userAddress);
        if (purchased) {
            $(`#${id}-mint-button`).text("PURCHASED");
            $(`#${id}-mint-button`).addClass("purchased");
            $(`#${id}-mint-button`).prop("disabled", true);
        }
        else if (minted == maxSlots) {
            $(`#${id}-mint-button`).text("SOLD OUT");
            $(`#${id}-mint-button`).addClass("purchased");
            $(`#${id}-mint-button`).prop("disabled", true);
        }
        $(`#${id}-supply`).text(minted);
    }
}

const updateGatedSupplies = async () => {
    let userAddress = await getAddress();
    let numListings = Number(await marketGated.getWLVendingItemsLength(currentTokenAddress));
    for (let id = 0; id < numListings; id++) {
        let buyers = await marketGated.getWLPurchasersOf(currentTokenAddress, id);
        let WLinfo = await marketGated.contractToWLVendingItems(currentTokenAddress, id);
        let maxSlots = WLinfo.amountAvailable;
        let minted = WLinfo.amountPurchased;
        let purchased = buyers.includes(userAddress);
        if (purchased) {
            $(`#${id}-mint-button-gated`).text("PURCHASED");
            $(`#${id}-mint-button-gated`).addClass("purchased");
            $(`#${id}-mint-button-gated`).prop("disabled", true);
        }
        else if (minted == maxSlots) {
            $(`#${id}-mint-button-gated`).text("SOLD OUT");
            $(`#${id}-mint-button-gated`).addClass("purchased");
            $(`#${id}-mint-button-gated`).prop("disabled", true);
        }
        $(`#${id}-supply-gated`).text(minted);
    }
}

const loadPartnerCollections = async () => {
    ungatedCollections = await market.getAllEnabledContracts();
    gatedCollections = await marketGated.getAllEnabledContracts();
    let fakeJSX = "";
    let userAddress = await getAddress();
    let projectToAddress = new Map();
    for (let i = 0; i < ungatedCollections.length; i++) {
        let address = ungatedCollections[i];
        try {
            if ((await market.isAuthorized(address, userAddress))) {
                $("#workshop-link").removeClass("hidden");
                $("#mobile-workshop-link").removeClass("hidden");
            }
        }
        catch (error) {
            console.log("Error with auth check:", error);
        }
        let projectInfo = await market.contractToProjectInfo(address);
        projectToAddress.set(projectInfo.projectName, address);
    }

    for (let i = 0; i < gatedCollections.length; i++) {
        let address = gatedCollections[i];
        try {
            if ((await marketGated.isAuthorized(address, userAddress))) {
                $("#workshop-link").removeClass("hidden");
                $("#mobile-workshop-link").removeClass("hidden");
            }
        }
        catch (error) {
            console.log("Error with auth check:", error);
        }
        let projectInfo = await marketGated.contractToProjectInfo(address);
        projectToAddress.set(projectInfo.projectName, address);
    }

    let alphabetical = Array.from(projectToAddress.keys()).sort();
    for (name of alphabetical) {
        fakeJSX += `<option value="${projectToAddress.get(name)}">${(name).toUpperCase()}</option>`;
    }

    $("#wl-select").append(fakeJSX);
}

// Processing txs

// After Tx Hook
const waitForTransaction = async (tx_, purchase = true) => {
    startLoading(tx_);
    provider.once(tx_.hash, async (transaction_) => {
        await endLoading(tx_, transaction_.status, purchase);
    });
};

// Resuming UI display, refreshing market for pending txs across pages
let pendingTransactions = localStorage.getItem("MartianMarketPendingTxs");

if (!pendingTransactions) {
    pendingTransactions = new Set();
}
else {
    pendingTransactions = new Set(Array.from(JSON.parse(pendingTransactions)));
    pendingTxArray = Array.from(pendingTransactions);
    pendingTransactions = new Set();

    for (let i = 0; i < pendingTxArray.length; i++) {
        waitForTransaction(pendingTxArray[i]);
    }
    localStorage.removeItem("MartianMarketPendingTxs");
}

function cachePendingTransactions() {
    localStorage.setItem("MartianMarketPendingTxs", JSON.stringify(Array.from(pendingTransactions)));
}

function startLoading(tx) {
    let txHash = tx.hash;
    const blockExplorerLink = `${networkToBlockExplorer[currentChain]}/tx/${txHash}`;
    const loadingDiv = `<a href="${blockExplorerLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div" id="loading-div-${txHash}">PROCESSING<span class="one">.</span><span class="two">.</span><span class="three">.</span><br>CLICK FOR ETHERSCAN</div></a><br>`;
    $("#pending-transactions").append(loadingDiv);
    pendingTransactions.add(tx);
}

async function endLoading(tx, txStatus, purchase) {
    let txHash = tx.hash;
    $(`#loading-div-${txHash}`).html("");
    let status = txStatus == 1 ? "SUCCESS" : "ERROR";
    $(`#loading-div-${txHash}`).addClass("blinking");
    if (txStatus == 1) {
        $(`#loading-div-${txHash}`).addClass("success");
        if (purchase) {
            await showTransactionResult(1);
        }
    }
    else if (txStatus == 0) {
        $(`#loading-div-${txHash}`).addClass("failure");
        await showTransactionResult(0);
    }
    $(`#loading-div-${txHash}`).append(`TRANSACTION ${status}.<br>VIEW ON ETHERSCAN.`);
    await sleep(7000);
    $(`#etherscan-link-${txHash}`).remove();
    pendingTransactions.delete(tx);
    if (pendingTransactions.size == 0) {
        await updateSupplies();
        await updateGatedSupplies();
    }
}

let chainLogoSet = false;

const setChainLogo = async () => {
    let chainLogo = "";
    if (currentChain == 1 || currentChain == 4) {
        chainLogo = "<img onclick='displayNetworkPrompt()' src='https://github.com/saintmaxi/wl-market-L1/blob/main/images/eth.png?raw=true' class='token-icon'>";
    }
    else if (currentChain == 10) {
        chainLogo = "<img onclick='displayNetworkPrompt()' src='https://github.com/saintmaxi/wl-market-L1/blob/main/images/optimism.png?raw=true' class='token-icon'>";
    }
    else if (currentChain == 42161) {
        chainLogo = "<img onclick='displayNetworkPrompt()' src='https://github.com/saintmaxi/wl-market-L1/blob/main/images/arbitrum.png?raw=true' class='token-icon'>";
    }
    else if (currentChain == 137) {
        chainLogo = "<img onclick='displayNetworkPrompt()' src='https://github.com/saintmaxi/wl-market-L1/blob/main/images/polygon.png?raw=true' class='token-icon'>";
    }
    chainLogoSet = true;
    $("#account-chain-logo").html(chainLogo);
    $("#mobile-account-chain-logo").html(chainLogo);
}

const updateInfo = async () => {
    let userAddress = await getAddress();
    $("#account-text").html(`${(userAddress.substr(0, 7)).toUpperCase()}..`);
    $("#account").addClass(`connected`);
    $("#mobile-account-text").html(`${(userAddress.substr(0, 7)).toUpperCase()}..`);
    if (!chainLogoSet) {
        await setChainLogo();
    }
};

setInterval(async () => {
    await checkTokenApproval();
    await updateInfo();
    await updateTokenBalance();
    if (loadedCollections) {
        await updateSupplies();
        await updateGatedSupplies();
    }
}, 5000)

ethereum.on("accountsChanged", async (accounts_) => {
    await updateInfo();
    location.reload();
});

provider.on("network", async (newNetwork, oldNetwork) => {
    if (oldNetwork) {
        location.reload();
    }
});

window.onload = async () => {
    await setMarket();
    if (!(await getAddress())) {
        const connectPrompt = ` <div id="ex1" class="partner-collection example">
                                    <div class="cover">
                                        <button class="button" onclick="connect()">CONNECT WALLET TO VIEW LISTINGS</button>
                                    </div>
                                    <h4 class="end-time">--:--:--</h4>
                                    <img class="collection-img" src="./images/question.jpeg">
                                    <div class="collection-info">
                                        <h3>???</h3>
                                        <h4>??? $TOKEN
                                        <br>
                                        ???/??? Purchased
                                        </h4>
                                       <div class="inside-text collection-description">
                                       Lorem ipsum dolor sit amet.
                                        </div>
                                        <button class="button">PURCHASE</button>
                                    </div>
                                </div>`
        $("#live-collections").empty();
        $("#past-collections").empty();
        $("#live-collections").append(connectPrompt);
        $("#past-collections").append(connectPrompt);
    }
    await updateInfo();
    await loadPartnerCollections();
    await updateTokenBalance();
};

window.onunload = async () => {
    cachePendingTransactions();
}