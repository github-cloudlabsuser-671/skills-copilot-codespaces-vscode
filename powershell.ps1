# Define variables
$resourceGroupName = "myResourceGroup"
$storageAccountName = "mystorageaccount"
$location = "westus"
$accountType = "Standard_LRS"

# Create a resource group
az group create --name $resourceGroupName --location $location

# Create a storage account
az storage account create --name $storageAccountName --resource-group $resourceGroupName --location $location --sku $accountType