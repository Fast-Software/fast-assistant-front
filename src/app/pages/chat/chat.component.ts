import { Component } from "@angular/core";
import { IconsModule } from "../../icons/icons.module";
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: "app-chat",
  host: { class: "flex-1" },
  standalone: true,
  imports: [IconsModule, ButtonComponent],
  templateUrl: "./chat.component.html",
})
export class ChatComponent {
  conversation: any[] = [];

  toResponse(text: string) {
    const questions: any = {
      "Quando é o prazo de inscrição?":
        "O prazo de inscrição para o edital do Startup NE será entre dia 2 de agosto até às 23h59 do dia 22 de setembro de 2024.",
      "Quanto é a bolsa Sócio Empreendedor?":
        "A bolsa sócio-empreendedor será de R$ 6.500,00 (seis mil e quinhentos reais) por mês, concedida por 6 (seis) meses, totalizando o valor máximo de R$ 39.000,00 (trinta e nove mil reais) por startup.",
    };

    this.conversation.push({ text, user: "Você" });
    setTimeout(() => {
      this.conversation.push({
        user: "Edital Startup NE",
        text: questions[text] || "Desculpe, não entendi a pergunta",
      });
    }, 1500);
  }
}
