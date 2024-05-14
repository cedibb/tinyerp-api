# TinyERP Client

This project provides a TypeScript client for interacting with the TinyERP API.

## Usage

Here's an example of how to use the `TinyERPClient`:

```typescript
import { TinyERPClient } from './client';

const apiClient = new TinyERPClient('your-token-here');

// Get account info
const accountInfo = await apiClient.getAccountInfo();

// Search for orders
const orders = await apiClient.searchOrders({ ... });

// Search for clients
const clients = await apiClient.searchClients({ ... });

// Get client information
const clientInfo = await apiClient.getClient({ ... });

// Add a new client
const newClient = await apiClient.addClient({ ... });

// Update an existing client
const updatedClient = await apiClient.updateClient({ ... });
```

## Implementation Progress

Here's a checklist of services and their implementation status:

- ~~Account Data (Dados da conta)~~

- ~~Clients and Suppliers (Clientes e Fornecedores)~~

- Products (Produtos)

- Product Tag Groups (Grupos de Tags de Produtos)

- Product Tags (Tags de Produtos)

- Price Lists (Listas de Preços)

- Sellers (Vendedores)

- CRM

- Accounts Receivable (Contas a receber)

- Accounts Payable (Contas a pagar)

- Webhooks

- Shipping (Fretes)

- Subscription (Inscrição)

- Orders (Pedidos)

- POS (PDV)

- Invoices (Notas Fiscais)

- Expeditions (Expedições)

- Service Invoices (Notas Fiscais de Serviço)

- Contracts (Contratos)

- Separation (Separação)

- Linked Tables (Tabelas Vinculadas)

- Customer Service (Atendimento)

- Location (Localização)

## References

For more information, please refer to the [official TinyERP API documentation](https://tiny.com.br/api-docs/api).