import {
    PaperPlaneTiltIcon,
    CheckCircleIcon,
} from "@phosphor-icons/react";

import { useState } from "react";

export default function Contact() {
    const [enviando, setEnviando] = useState(false);
    const [mensagemEnviada, setMensagemEnviada] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setEnviando(true);
        setMensagemEnviada(false);

        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
            const resposta = await fetch(
                "https://formsubmit.co/ajax/262b7ac3975da85aa2e457f9ae065374",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            if (!resposta.ok) {
                throw new Error("Erro ao enviar formulário");
            }

            form.reset();
            setMensagemEnviada(true);

            setTimeout(() => {
                setMensagemEnviada(false);
            }, 4000);
        } catch (error) {
            console.error(error);
        } finally {
            setEnviando(false);
        }
    }

    return (
        <main className="min-h-[90.5vh] overflow-hidden bg-slate-50">

            {/* =========================
          CONTEÚDO PRINCIPAL
      ========================== */}
            <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 md:py-20 lg:px-10">

                {/* =========================
            CABEÇALHO
        ========================== */}
                <div className="mx-auto mb-12 max-w-2xl text-center">

                    <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                        Fale com a nossa equipe
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
                        Tem alguma dúvida, sugestão ou precisa de ajuda?
                        Envie uma mensagem para nossa equipe.
                    </p>

                </div>

                {/* =========================
            ÁREA PRINCIPAL
        ========================== */}
                <div className="mx-auto grid max-w-5xl items-stretch gap-8 md:grid-cols-2">

                    {/* =========================
              FORMULÁRIO
          ========================== */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8"
                    >

                        {/* Configurações FormSubmit */}
                        <input
                            type="hidden"
                            name="_subject"
                            value="Nova mensagem — RH"
                        />

                        <input
                            type="hidden"
                            name="_template"
                            value="table"
                        />

                        {/* Nome */}
                        <div className="mb-5">

                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-semibold text-slate-700"
                            >
                                Nome
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Digite seu nome"
                                required
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                            />

                        </div>

                        {/* E-mail */}
                        <div className="mb-5">

                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-semibold text-slate-700"
                            >
                                E-mail
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Digite seu e-mail"
                                required
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                            />

                        </div>

                        {/* Mensagem */}
                        <div className="mb-6">

                            <label
                                htmlFor="message"
                                className="mb-2 block text-sm font-semibold text-slate-700"
                            >
                                Mensagem
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Digite sua mensagem..."
                                required
                                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                            />

                        </div>

                        {/* Botão */}
                        <button
                            type="submit"
                            disabled={enviando}
                            className="mt-auto flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 disabled:cursor-not-allowed disabled:opacity-60"
                        >

                            <PaperPlaneTiltIcon
                                size={20}
                                weight="fill"
                            />

                            {enviando
                                ? "Enviando..."
                                : "Enviar mensagem"}

                        </button>

                    </form>

                    {/* =========================
              IMAGEM DO GRUPO
          ========================== */}
                    <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-slate-900 shadow-xl shadow-slate-200/50 sm:min-h-[500px] md:min-h-full">

                        <img
                            src="https://ik.imagekit.io/bellaceccon/grupo%20rh.png"
                            alt="Equipe responsável pelo sistema de gestão da FITHUB"
                            className="absolute inset-0 h-full w-full object-cover object-center"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 to-transparent" />

                    </div>

                </div>

            </section>

            {/* =========================
          MENSAGEM DE SUCESSO
      ========================== */}
            {mensagemEnviada && (
                <div className="fixed bottom-6 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 items-center gap-3 rounded-2xl border border-green-100 bg-white px-5 py-4 text-slate-800 shadow-2xl sm:left-auto sm:right-6 sm:w-auto sm:max-w-none sm:translate-x-0">

                    <CheckCircleIcon
                        size={24}
                        weight="fill"
                        className="shrink-0 text-green-500"
                    />

                    <span className="font-medium">
                        Mensagem enviada!
                    </span>

                </div>
            )}

        </main>
    );
}