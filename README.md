# Versione homemade di "Se mi perdo"

## Example
https://whereismy.pages.dev/?tag_id=100&tag_name=John%20Doe&tag_phone=0510000

![[QR Code](https://bit.ly/3NWNqij)](res/qrcode.png)

### Funzionamento parametri
| Nome Parametro | Funzionamento                                                    |
|----------------|------------------------------------------------------------------|
| tag_ig         | inutilizzato al momento                                          |
| tag_name       | nome del tag, usato nella pagina web e nel messaggio di notifica |
| tag_phone      | telefono dell'owner, usato nella pagina web                      |

## Stack
- HTML semplice con **Bootstrap**
- Codice pubblicato su **Github** con deploy diretto su **Cloudflare pages**
- Il click sul bottone triggera:
  - una chiamata su **Pipedream** che logga su Google Sheet
  - l'apertura di un messaggio preconfigurato su **Whatsapp** per l'invio della posizione tramite google maps

![Workflow Pipedream](res/pipedream_wf.png)

## TO-DOs
- Test su Android
- Gestire assenza di permesso per ottenre la location
- Verificare se possibile inviare posizione da whatsapp anzichè il link di google maps
- Toast notification on location sent

