import fs from 'fs';
import path from 'path';

import { it, expect, vi, beforeEach } from "vitest";
import { Window } from 'happy-dom';
import { showError } from "./dom";


const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;

vi.stubGlobal('document', document);

beforeEach(() => {
    document.body.innerHTML = '';
    document.write(htmlDocContent);
});

it('should add an error paragraph to the id="errors" element', () => {
    showError('Test');

    const errorsEl = document.getElementById('errors');
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph).not.toBeNull();
});

it('should not contain an error paragraph initially', () => {
    const errorsEl = document.getElementById('errors');
    const errorParagraph = errorsEl.firstElementChild;

    expect(errorParagraph).toBeNull();
});