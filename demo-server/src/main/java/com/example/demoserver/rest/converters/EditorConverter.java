package com.example.demoserver.rest.converters;
import com.example.demoserver.model.Editor;
import com.example.demoserver.rest.beans.EditorDto;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class EditorConverter implements Converter<Editor, EditorDto> {
    @Override
    public EditorDto convert(Editor editor) {
        return editor == null ? null : new EditorDto(editor.getUserId(), editor.getRole());
    }
}
