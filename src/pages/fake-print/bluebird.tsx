import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import EscPosEncoder from "@waymen/esc-pos-encoder"

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  padding: '50px 0'
}

type ParamType = {
    struckNo?: string,
    dari?: string,
    ke?: string,
    noArmada?: string,
    tanggal?: string,
    waktuMulai?: string,
    waktuSelesai?: string,
    jarak?: string,
    wait?: string,
    ongkos?: string
}

const IndexPage: React.FC<PageProps> = () => {
    const [param,setParam] = React.useState<ParamType>()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParam({
            ...param,
            [e.target.name] : e.target.value
        })
    }

    const connectPrinter = async (setPrintCharacteristic: React.Dispatch<React.SetStateAction<BluetoothRemoteGATTCharacteristic | undefined>>) => {
        try{
          const res = await navigator.bluetooth.requestDevice({
              filters: [{
                  services: ['000018f0-0000-1000-8000-00805f9b34fb']
              }]
          })
          const connected = await res.gatt?.connect()
      
          const primaryService = await connected?.getPrimaryService("000018f0-0000-1000-8000-00805f9b34fb")
          const characteristic = await primaryService?.getCharacteristic("00002af1-0000-1000-8000-00805f9b34fb")
          setPrintCharacteristic(characteristic)
          return characteristic
        }catch(error){
          console.log(error);
          setPrintCharacteristic(undefined)
          return undefined
        }
    }

    const print = async () => {
        const res = await navigator.bluetooth.requestDevice({
            filters: [{
                services: ['000018f0-0000-1000-8000-00805f9b34fb']
            }]
        })
        const connected = await res.gatt?.connect()
    
        const primaryService = await connected?.getPrimaryService("000018f0-0000-1000-8000-00805f9b34fb")
        const characteristic = await primaryService?.getCharacteristic("00002af1-0000-1000-8000-00805f9b34fb")

        if(!characteristic){
            return false
        }

        let img = new Image();
        img.src = '/blue-bird-logo.png';
        
        let encoder = new EscPosEncoder();
        let result = encoder
            .initialize()
        img.onload = async () => {
            console.log('test')
            result
                .align('center')
                .image(img, 64, 56, 'atkinson')

            await characteristic?.writeValue(result.encode())

            let encoder1 = new EscPosEncoder();
            let result1 = encoder1
                .initialize()
                .align('center')
                .size(3)
                .bold(true)
                .line('BLUE BIRD GROUP',40)
                .bold(false)
                .size(0)
                .line('Call Center')
                .line('021-7917 1234. 7941234')
                .align('left')
                .line(`    Struck no.: ${param?.struckNo}`)
                .line(`    Dari: ..............`)
                .line(`    Ke: ..............`)
                .line(`    No Armada: ${param?.noArmada}`)
                .line(`    Tanggal: ${param?.tanggal}`)
                .line(`    Waktu: ${param?.waktuMulai} - ${param?.waktuSelesai}`)
                .line(`    Jarak: ${param?.jarak} km`)
                .line(`    Wait: ${param?.wait} m.s`)
                .line(`    Ongkos: Rp. ${param?.ongkos}`)
                .align('center')
                .line('* TERIMA KASIH *')
                .newline()
                .newline()
            await characteristic?.writeValue(result1.encode())
        }
    }
    return (
        <main style={pageStyles}>
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'start', gap: '1rem'}}>
            <label>Struck No</label>
            <input type="text" name="struckNo" placeholder="ex: 0005-00" onChange={onChange} />
            <label>No Armada</label>
            <input type="text" name="noArmada" placeholder="ex: LL142" onChange={onChange} />
            <label>Tanggal</label>
            <input type="text" name="tanggal" placeholder="ex: 17/01/2016" onChange={onChange} />
            <label>Waktu Mulai</label>
            <input type="text" name="waktuMulai" placeholder="ex: 03:01" onChange={onChange} />
            <label>Waktu Selesai</label>
            <input type="text" name="waktuSelesai" placeholder="ex: 03:29" onChange={onChange} />
            <label>Jarak</label>
            <input type="text" name="jarak" placeholder="ex: 7.150" onChange={onChange} />
            <label>Wait</label>
            <input type="text" name="wait" placeholder="ex: 12.11" onChange={onChange} />
            <label>Ongkos</label>
            <input type="text" name="ongkos" placeholder="ex: 37660" onChange={onChange} />

            <button type="button" onClick={() => print()}>Print</button>
        </div>
        </main>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Fake print BlueBird</title>
