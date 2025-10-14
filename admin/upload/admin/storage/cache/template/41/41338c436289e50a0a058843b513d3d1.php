<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* catalog/product_form.twig */
class __TwigTemplate_8cba8ab068a054d60d4063200dcec1e8 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo ($context["header"] ?? null);
        echo ($context["column_left"] ?? null);
        echo "
<div id=\"content\">
  <div class=\"page-header\">
    <div class=\"container-fluid\">
      <div class=\"pull-right\">
        <button type=\"submit\" form=\"form-category\" data-toggle=\"tooltip\" title=\"";
        // line 6
        echo ($context["button_save"] ?? null);
        echo "\" class=\"btn btn-primary\">
          <i class=\"fa fa-save\"></i>
        </button>
        <a href=\"";
        // line 9
        echo ($context["cancel"] ?? null);
        echo "\" data-toggle=\"tooltip\" title=\"";
        echo ($context["button_cancel"] ?? null);
        echo "\" class=\"btn btn-default\">
          <i class=\"fa fa-reply\"></i>
        </a>
      </div>
      <h1>";
        // line 13
        echo ($context["heading_title"] ?? null);
        echo "</h1>
      <ul class=\"breadcrumb\">
        ";
        // line 15
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["breadcrumbs"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["breadcrumb"]) {
            // line 16
            echo "        <li><a href=\"";
            echo twig_get_attribute($this->env, $this->source, $context["breadcrumb"], "href", [], "any", false, false, false, 16);
            echo "\">";
            echo twig_get_attribute($this->env, $this->source, $context["breadcrumb"], "text", [], "any", false, false, false, 16);
            echo "</a></li>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['breadcrumb'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 18
        echo "      </ul>
    </div>
  </div>
  <div class=\"container-fluid\">
    ";
        // line 22
        if (($context["error_warning"] ?? null)) {
            // line 23
            echo "    <div class=\"alert alert-danger alert-dismissible\">
      <i class=\"fa fa-exclamation-circle\"></i> ";
            // line 24
            echo ($context["error_warning"] ?? null);
            echo "
      <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>
    </div>
    ";
        }
        // line 28
        echo "    <div class=\"panel panel-default\">
      <div class=\"panel-heading\">
        <h3 class=\"panel-title\"><i class=\"fa fa-pencil\"></i> ";
        // line 30
        echo ($context["text_form"] ?? null);
        echo "</h3>
      </div>
      <div class=\"panel-body\">
        <form action=\"";
        // line 33
        echo ($context["action"] ?? null);
        echo "\" method=\"post\" enctype=\"multipart/form-data\" id=\"form-category\" class=\"form-horizontal\">
          <ul class=\"nav nav-tabs\">
            <li class=\"active\"><a href=\"#tab-general\" data-toggle=\"tab\">";
        // line 35
        echo ($context["tab_general"] ?? null);
        echo "</a></li>
          </ul>
          <div class=\"tab-content\">
            <div class=\"tab-pane active\" id=\"tab-general\">

              <!-- Heading -->
              <div class=\"form-group required\">
                <label class=\"col-sm-2 control-label\" for=\"input-heading\">Heading</label>
                <div class=\"col-sm-10\">
                  <input type=\"text\" name=\"heading\" value=\"";
        // line 44
        echo ($context["heading"] ?? null);
        echo "\" placeholder=\"Enter heading\" id=\"input-heading\" class=\"form-control\" />
                </div>
              </div>

              <!-- Category Name -->
              <div class=\"form-group required\">
                <label class=\"col-sm-2 control-label\" for=\"input-name\">";
        // line 50
        echo ($context["entry_name"] ?? null);
        echo "</label>
                <div class=\"col-sm-10\">
                  <input type=\"text\" name=\"name\" value=\"";
        // line 52
        echo ($context["name"] ?? null);
        echo "\" placeholder=\"";
        echo ($context["entry_name"] ?? null);
        echo "\" id=\"input-name\" class=\"form-control\" />
                  ";
        // line 53
        if (($context["error_name"] ?? null)) {
            // line 54
            echo "                  <div class=\"text-danger\">";
            echo ($context["error_name"] ?? null);
            echo "</div>
                  ";
        }
        // line 56
        echo "                </div>
              </div>

              <!-- Category Description -->
              <div class=\"form-group\">
                <label class=\"col-sm-2 control-label\" for=\"input-description\">";
        // line 61
        echo ($context["entry_description"] ?? null);
        echo "</label>
                <div class=\"col-sm-10\">
                  <textarea name=\"description\" placeholder=\"";
        // line 63
        echo ($context["entry_description"] ?? null);
        echo "\" id=\"input-description\" data-toggle=\"summernote\" data-lang=\"";
        echo ($context["summernote"] ?? null);
        echo "\" class=\"form-control\">";
        echo ($context["description"] ?? null);
        echo "</textarea>
                </div>
              </div>

              <!-- Meta Title -->
              <div class=\"form-group required\">
                <label class=\"col-sm-2 control-label\" for=\"input-meta-title\">";
        // line 69
        echo ($context["entry_meta_title"] ?? null);
        echo "</label>
                <div class=\"col-sm-10\">
                  <input type=\"text\" name=\"meta_title\" value=\"";
        // line 71
        echo ($context["meta_title"] ?? null);
        echo "\" placeholder=\"";
        echo ($context["entry_meta_title"] ?? null);
        echo "\" id=\"input-meta-title\" class=\"form-control\" />
                  ";
        // line 72
        if (($context["error_meta_title"] ?? null)) {
            // line 73
            echo "                  <div class=\"text-danger\">";
            echo ($context["error_meta_title"] ?? null);
            echo "</div>
                  ";
        }
        // line 75
        echo "                </div>
              </div>

              <!-- Meta Description -->
              <div class=\"form-group\">
                <label class=\"col-sm-2 control-label\" for=\"input-meta-description\">";
        // line 80
        echo ($context["entry_meta_description"] ?? null);
        echo "</label>
                <div class=\"col-sm-10\">
                  <textarea name=\"meta_description\" rows=\"5\" placeholder=\"";
        // line 82
        echo ($context["entry_meta_description"] ?? null);
        echo "\" id=\"input-meta-description\" class=\"form-control\">";
        echo ($context["meta_description"] ?? null);
        echo "</textarea>
                </div>
              </div>

              <!-- Meta Keywords -->
              <div class=\"form-group\">
                <label class=\"col-sm-2 control-label\" for=\"input-meta-keyword\">";
        // line 88
        echo ($context["entry_meta_keyword"] ?? null);
        echo "</label>
                <div class=\"col-sm-10\">
                  <textarea name=\"meta_keyword\" rows=\"5\" placeholder=\"";
        // line 90
        echo ($context["entry_meta_keyword"] ?? null);
        echo "\" id=\"input-meta-keyword\" class=\"form-control\">";
        echo ($context["meta_keyword"] ?? null);
        echo "</textarea>
                </div>
              </div>

              <!-- Image -->
              <div class=\"form-group\">
                <label class=\"col-sm-2 control-label\" for=\"input-image\">Image</label>
                <div class=\"col-sm-10\">
                  <input type=\"file\" name=\"image\" id=\"input-image\" class=\"form-control\" />
                  ";
        // line 99
        if (($context["image"] ?? null)) {
            // line 100
            echo "                  <p>Current: <img src=\"";
            echo ($context["image"] ?? null);
            echo "\" alt=\"\" style=\"max-height:100px;\"/></p>
                  ";
        }
        // line 102
        echo "                </div>
              </div>

              <!-- Author Name -->
              <div class=\"form-group\">
                <label class=\"col-sm-2 control-label\" for=\"input-author\">Author Name</label>
                <div class=\"col-sm-10\">
                  <input type=\"text\" name=\"author\" value=\"";
        // line 109
        echo ($context["author"] ?? null);
        echo "\" placeholder=\"Enter author name\" id=\"input-author\" class=\"form-control\" />
                </div>
              </div>

              <!-- Date of Publish -->
              <div class=\"form-group\">
                <label class=\"col-sm-2 control-label\" for=\"input-date\">Date of Publish</label>
                <div class=\"col-sm-10\">
                  <input type=\"date\" name=\"date_publish\" value=\"";
        // line 117
        echo ($context["date_publish"] ?? null);
        echo "\" id=\"input-date\" class=\"form-control\" />
                </div>
              </div>

            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Summernote & Codemirror -->
  <link href=\"view/javascript/codemirror/lib/codemirror.css\" rel=\"stylesheet\" />
  <link href=\"view/javascript/codemirror/theme/monokai.css\" rel=\"stylesheet\" />
  <script type=\"text/javascript\" src=\"view/javascript/codemirror/lib/codemirror.js\"></script> 
  <script type=\"text/javascript\" src=\"view/javascript/codemirror/lib/xml.js\"></script> 
  <script type=\"text/javascript\" src=\"view/javascript/codemirror/lib/formatting.js\"></script> 
  
  <script type=\"text/javascript\" src=\"view/javascript/summernote/summernote.min.js\"></script>
  <link href=\"view/javascript/summernote/summernote.min.css\" rel=\"stylesheet\" />
  <script type=\"text/javascript\" src=\"view/javascript/summernote/summernote-image-attributes.js\"></script>
  <script type=\"text/javascript\" src=\"view/javascript/summernote/opencart.js\"></script>
</div>
";
        // line 140
        echo ($context["footer"] ?? null);
        echo "
";
    }

    public function getTemplateName()
    {
        return "catalog/product_form.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  294 => 140,  268 => 117,  257 => 109,  248 => 102,  242 => 100,  240 => 99,  226 => 90,  221 => 88,  210 => 82,  205 => 80,  198 => 75,  192 => 73,  190 => 72,  184 => 71,  179 => 69,  166 => 63,  161 => 61,  154 => 56,  148 => 54,  146 => 53,  140 => 52,  135 => 50,  126 => 44,  114 => 35,  109 => 33,  103 => 30,  99 => 28,  92 => 24,  89 => 23,  87 => 22,  81 => 18,  70 => 16,  66 => 15,  61 => 13,  52 => 9,  46 => 6,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "catalog/product_form.twig", "");
    }
}
