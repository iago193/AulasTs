const form = document.querySelector<HTMLFormElement>('#form-validate');

type FormValues = {
    username: string,
    email: string,
    password: string,
    passwordRepeat: string
};

const errors: Record<string, string> = {};

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();

        const target = e.target as HTMLFormElement;
        const formData = new FormData(target);
        const data = {} as FormValues;

        formData.forEach((value, key) => {
            data[key as keyof FormValues] = value.toString();
        });

        // Limpa mensagens antigas
        form.querySelectorAll('.error-message').forEach(el => el.remove());

        const isValid = validateForm(data);
        console.log(isValid ? "Form válido" : "Form inválido");
    });

    function validateForm(data: FormValues): boolean {
        // Limpa erros antigos
        for (const key in errors) delete errors[key];

        if (!data.username) errors["username"] = "*O campo usuário é obrigatório";
        if (!data.email) errors["email"] = "*O campo email é obrigatório";
        if (data.password !== data.passwordRepeat) errors["passwordRepeat"] = "*As senhas não coincidem";

        toThrowError(errors);

        return Object.keys(errors).length === 0;
    }

    function toThrowError(error: Record<string, string>) {
        for (const key in error) {
            const input = form?.querySelector<HTMLInputElement>(`#${key}`);
            if (input) {
                const span = document.createElement('span');
                span.className = 'error-message';
                span.style.color = 'red';
                span.textContent = error[key];
                input.insertAdjacentElement('afterend', span);
            }
        }
    }
}
