import { BsCartPlus } from "react-icons/bs";


export function Home() {
    return (
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto">
                <h1 className="font-bold text-2xl mb-4 mt-10 text-center ">Produtos em alta</h1>

                <div className="grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                    <section className="w-full">
                        <img
                            className="w-full rounded-lg max-h-70 mb-2"
                            src="https://www.google.com/search?sca_esv=41771b6d1dd3ed98&sxsrf=AE3TifPFyUwUnntDHkBWtvfs5ebVuoU1Gw:1754244726744&udm=2&fbs=AIIjpHxX5k-tONtMCu8aDeA7E5WMBOOrUKuRoPSuUpcifFVI4Or88IamB1zpTQwJ1jlGUe_KLYVYINydlrEfbZWBXY68o5e0Zp3WJVb4Tq9tZbeCTQigKBz-SFb5tBkZN79rAHoH7y55wauzDJLHjAwnmITUNTqChmceVZn9lgW7aqj1nAa7eCTiBy3Y2HEsBafRfY8Dh03gukT1XaUcs4yYgob0xWCkMA&q=fone+de+ouvido&sa=X&ved=2ahUKEwjZqKXunu-OAxXJLLkGHWw5ASgQtKgLegQIEhAB&biw=1920&bih=953&dpr=1#vhid=NBF2Dmid9afeJM&vssid=mosaic"
                            alt="Logo do produto"
                        />
                        <p className="font-medium mt-1 mb-2">Airpods Pro</p>
                        <div className="flex gap-3 items-center">
                            <strong className="text-zinc-700/90">
                                R$ 1000
                            </strong>
                            <button className="bg-zinc-900 p-1 rounded">
                                <BsCartPlus size={20} color="#fff" />
                            </button>
                        </div>
                    </section>
                </div>

            </main>

        </div>
    )
}